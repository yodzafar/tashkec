import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const Scheduler: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.Scheduler}>Scheduler</MainLayout>
}

export default Scheduler
