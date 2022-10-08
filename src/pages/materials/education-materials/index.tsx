import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const EducationMaterials: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.EducationMaterial}>EducationMaterials</MainLayout>
}

export default EducationMaterials
