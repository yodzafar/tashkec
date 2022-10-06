import { HomeMain } from 'Components/Home'
import { MainLayout } from 'Components/Layout'
import type { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Home: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.Slider}>
      <HomeMain />
    </MainLayout>
  )
}

export default Home
