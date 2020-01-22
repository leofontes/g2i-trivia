import {AllHtmlEntities} from 'html-entities'

export function decodeHTMLEntities(raw: string) {
  const entities = new AllHtmlEntities()

  return entities.decode(raw)
}

export function capitalize(raw: string) {
  return raw.replace(/^\w/, c => c.toUpperCase())
}
