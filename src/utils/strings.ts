import {AllHtmlEntities} from 'html-entities'

export function decodeHTMLEntities(raw: string) {
  const entities = new AllHtmlEntities()

  return entities.decode(raw)
}
