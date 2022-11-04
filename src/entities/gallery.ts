import { ITitle } from 'entities/common'


export interface IGallery extends ITitle {
  publishedDate: string
  mainPhotoUrl: string | null
}

export type MainPhotoMutation = {
  data: { photoGalleryId: number; attachmentId: number }
  action?: () => void
}
