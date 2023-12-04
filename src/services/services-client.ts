import { ContentType } from "./types";
import { RequestMethod } from "./types";

interface ClientProps {
  token?: string;
  endpoint?: string;
  method?: RequestMethod;
  body?: any;
  contentType?: ContentType;
}

export default async function ({
  token,
  endpoint,
  method = RequestMethod.GET,
  body = {},
  contentType = ContentType.JSON,
}: ClientProps): Promise<any> {
  if (!endpoint) throw new Error("Services Client: Needs an endpoint");
  if (!token) throw new Error("Services Client: Needs token");

  const options: { method: RequestMethod; headers: any; body?: any } = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": contentType,
      Authorization: `Bearer ${token}`,
    },
  };

  if (method !== "GET") {
    options.body = JSON.stringify(body);
  }


  return fetch(
    `${import.meta.env.VITE_STREAMLINE_SERVICES_URL}/${endpoint}`,
    options
  )
    .then(async (res) => {
      const statusCode = res.status;

      return res.json().then((json) => {
        return { ...json, statusCode };
      });
    })
    .then(({ meta, data, statusCode, ...rest }) => {
      if (rest.message) {
        return {
          status: "error",
          message: rest.message,
          statusCode,
        };
      }

      return { meta, data, statusCode };
    });
}