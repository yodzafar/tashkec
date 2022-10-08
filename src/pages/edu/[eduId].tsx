import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const EducationDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.EducationInner}>EducationDetail</MainLayout>
}

export default EducationDetail
