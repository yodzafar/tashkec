import { AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios'
import { IContent, ITitle } from 'entities/common'

export function getListCountFromHeader(headers: RawAxiosResponseHeaders | AxiosResponseHeaders) {
  return Number(headers?.['x-total-count']) || 0
}

export function getTitle(locale: string | undefined, {titleKr, titleRu, titleUz}: Omit<ITitle, 'id'>): string {
  switch (locale) {
    case 'ru':
      return titleRu
    case 'uz':
      return titleUz
    case 'kr':
      return titleKr
    default:
      return ''
  }
}

export function getContent(locale: string | undefined, {contentUz, contentRu, contentKr}: Omit<IContent, 'id'>): string {
  switch (locale) {
    case 'ru':
      return contentRu
    case 'uz':
      return contentUz
    case 'kr':
      return contentKr
    default:
      return ''
  }
}