export function entries<V>(obj: object): [string, any][] {
  // @ts-ignore
  return Object.keys(obj).map(k => [k, obj[k]]) as [string, any]
}
