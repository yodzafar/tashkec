import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const TopikDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.TopikInner}>TopikDetail</MainLayout>
}

export default TopikDetail
