import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const NewsDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.NewsInner}>NewsDetail</MainLayout>
}

export default NewsDetail
