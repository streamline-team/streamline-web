import { ContentType, RequestMethod } from './types'

interface ClientProps {
  token?: string
  endpoint?: string
  method?: RequestMethod
  body?: any
  contentType?: ContentType
}

export default async function ({
  token,
  endpoint,
  method = RequestMethod.GET,
  body = {},
  contentType = ContentType.JSON
}: ClientProps): Promise<any> {
  if (endpoint == null) throw new Error('Services Client: Needs an endpoint')
  if (token == null) throw new Error('Services Client: Needs token')

  const options: { method: RequestMethod, headers: any, body?: any } = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
      Authorization: `Bearer ${token}`
    }
  }

  if (method !== 'GET') {
    options.body = JSON.stringify(body)
  }

  return await fetch(
    `${import.meta.env.VITE_STREAMLINE_SERVICES_URL}/${endpoint}`,
    options
  )
    .then(async (res) => {
      const statusCode = res.status

      return await res.json().then((json) => {
        return { ...json, statusCode }
      })
    })
    .then(({ meta, data, statusCode, ...rest }) => {
      const { message } = rest

      if ((message as object | null) != null) {
        return {
          status: 'error',
          message: rest.message,
          statusCode
        }
      }

      return { meta, data, statusCode }
    })
}
