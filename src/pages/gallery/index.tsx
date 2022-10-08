import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Gallery: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.Gallery}>Gallery</MainLayout>
}

export default Gallery
