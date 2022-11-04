import { IAttachment } from 'entities/attachment'

export interface ISlider {
  attachment: IAttachment
  id: number
  name: string | null
  sliderUrl: string | null
}

export interface IPopup {
  id: number,
  isImage: boolean,
  videoUrl: string | null,
  redirectUrl: string | null,
  attachment: IAttachment | null
}