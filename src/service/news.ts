import httpClient from 'service/index'
import { INews } from 'entities/news'

export default {
  getNewsList: () => httpClient.get<INews[]>('/news')
}