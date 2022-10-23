import { Inertia, PageProps, Page } from '@inertiajs/inertia'
import { ErrResponse, HttpResponse } from '../Fetcher/type'

function inertiaPost(url: string, init: {}) {
  return new Promise((resolve, reject) => {
    Inertia.post(url, init, {
      onSuccess: function (params: Page<PageProps>) {
        resolve(params)
      },
      onError: function (params: Record<string, string>) {
        reject(params)
      },
    })
  })
}

export function transformResponse<T>() {
  return async (res: any): Promise<HttpResponse<T>> => {
    const props: any = res.props
    const data: T = { ...props }

    return { data, err: null, status: 200 }
  }
}

function transformError<T>(err: Record<string, string>): Promise<HttpResponse<T>> {
  const errorStrings = Object.values(err)
  const error: ErrResponse = {
    data: null,
    err: { message: errorStrings.join(), status: -1 },
    status: -1,
  }
  return Promise.resolve(error)
}

export function post<T>(url: string, init: {}) {
  return inertiaPost(url, init)
    .then(transformResponse<T>())
    .catch((err) => transformError<T>(err))
}
