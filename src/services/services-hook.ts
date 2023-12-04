import { Dispatch, SetStateAction, useState } from "react";
import { addSeconds, isAfter, parseISO } from "date-fns";

import ServicesClient from "./services-client";

import { ContentType } from "./types";
import { RequestMethod } from "./types";

import useLocalStorageState from "use-local-storage-state";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

interface InitializerProps {
  endpoint?: string;
  method?: RequestMethod;
  contentType?: ContentType;
  storageKey?: string | undefined;
  expiresSeconds?: number | undefined;
  forceFetch?: boolean;
}

interface HookProps {
  endpoint?: string;
  body?: unknown;
}

interface ServicesAPILocalStorageObject<T> {
  expires: string | undefined;
  value?: T;
}

export type CallServicesAPI = (hookProps?: HookProps) => Promise<void>;

export const useServicesAPI = <ResponseType>(
  props: InitializerProps
): [
  CallServicesAPI,
  ResponseType | null,
  boolean,
  any,
  number | null,
  () => void
] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { storageKey, expiresSeconds, forceFetch } = props;
  let localStorageValue;
  let cachedValue: ResponseType | null = null;
  let setLocalStorageValue: Dispatch<
    SetStateAction<ServicesAPILocalStorageObject<ResponseType> | null>
  >;

  const saveToLocalStorage = storageKey
    ? (data: ResponseType | null) => {
        if (setLocalStorageValue) {
          setLocalStorageValue({
            expires: addSeconds(new Date(), expiresSeconds || 0).toISOString(),
            value: data || undefined,
          });
        }
      }
    : null;

  let go: CallServicesAPI = () => Promise.resolve();

  if (!!storageKey && !forceFetch) {
    [localStorageValue, setLocalStorageValue] =
      useLocalStorageState<ServicesAPILocalStorageObject<ResponseType> | null>(
        storageKey,
        {
          defaultValue: {
            expires: undefined as string | undefined,
            value: undefined as ResponseType,
          },
        }
      );

    if (
      localStorageValue &&
      localStorageValue.expires &&
      isAfter(parseISO(localStorageValue.expires), new Date())
    ) {
      cachedValue = localStorageValue.value || null;
      setLoading(false);
    }
  }

  const [response, setResponse] = useState<ResponseType | null>(cachedValue);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const clearStates = () => {
    setResponse(null);
    setStatusCode(null);
    setError(null);
  };

  if (!cachedValue) {
    const { getToken } = useKindeAuth();
    const defaults = {
      method: RequestMethod.GET,
      body: {},
    };

    const options = {
      ...defaults,
      ...props,
    };

    go = async (hookProps?: HookProps): Promise<void> => {
      setResponse(null);
      setStatusCode(null);
      setLoading(true);
      setError(null);

      const token = await getToken();

      return ServicesClient({ ...options, token, ...hookProps })
        .then((response) => {
          const { meta, data, statusCode } = response;

          setStatusCode(statusCode);

          if (meta.status === "error") {
            setError(meta.error ?? meta.status);
            if (saveToLocalStorage) {
              saveToLocalStorage(null);
            }
            setResponse(meta.data);
          } else {
            setError(null);
            if (saveToLocalStorage) {
              saveToLocalStorage(data);
            }
            setResponse(data);
          }
        })
        .catch((e) => {
          setError(e);
          if (saveToLocalStorage) {
            saveToLocalStorage(null);
          }
          throw new Error(e);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  }
  return [go, response, loading, error, statusCode, clearStates];
};

export const useServicesClient = (): (({
  endpoint,
  method,
  body,
}: {
  endpoint: string;
  method?: RequestMethod;
  body?: unknown;
}) => Promise<unknown>) => {
  const { getToken } = useKindeAuth();

  return async ({
    endpoint,
    method = RequestMethod.GET,
    body = {},
  }: {
    endpoint: string;
    method?: RequestMethod;
    body?: unknown;
  }): Promise<unknown> => {
    const token = await getToken();

    return ServicesClient({ endpoint, method, body, token });
  };
};
