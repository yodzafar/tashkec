import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Faq: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.Faq}>Faq</MainLayout>
}

export default Faq
