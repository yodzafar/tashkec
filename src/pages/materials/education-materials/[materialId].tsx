import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const EducationMaterialDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.EducationMaterialInner}>EducationMaterialDetail</MainLayout>
}

export default EducationMaterialDetail
