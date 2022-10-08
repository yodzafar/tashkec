import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const UniversityDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.UniversityInner}>UniversityDetail</MainLayout>
}

export default UniversityDetail
