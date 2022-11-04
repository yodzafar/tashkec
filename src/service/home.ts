import httpClient from 'service/index'
import { ISlider } from 'entities/main'

export default {
  getBannerList: () => httpClient.get<ISlider[]>('/sliders')
}