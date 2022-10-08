import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const GalleryDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.Gallery}>Gallery</MainLayout>
}

export default GalleryDetail
