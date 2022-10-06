import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Greeting: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.Greeting}>Greeting</MainLayout>
}

export default Greeting
