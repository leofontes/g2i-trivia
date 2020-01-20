import {entries} from './collections'

export const ENDPOINT = 'https://opentdb.com/api.php'

export type QueryParams = {[s: string]: string | number | number[]}

export async function get(params?: QueryParams, host: string = ENDPOINT) {
  // const url = `${host}${buildQuery(params)}`
  const url =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const response = await fetch(url)

  if (!response.ok) {
    const body = await response.text()
    // throw new RestException(response.statusText)
    //TODO handle error
  }

  return response.json()
}

export function buildQuery(params?: QueryParams): string {
  if (params === undefined) {
    return ''
  }

  return entries(params).reduce((acc, item) => {
    const key = encodeURIComponent(item[0])
    const value = item[1]

    if (value instanceof Array) {
      value.forEach(item => {
        const v = encodeURIComponent(item)
        acc = addInQuery(acc, key, v)
      })
    } else {
      const v = encodeURIComponent(value)
      acc = addInQuery(acc, key, v)
    }

    return acc
  }, '')
}

function addInQuery(acc: string, key: string, value: string): string {
  if (!acc || acc.length === 0) {
    return `?${key}=${value}`
  }

  return `${acc}&${key}=${value}`
}
