import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Universities: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.University}>Universities</MainLayout>
}

export default Universities
