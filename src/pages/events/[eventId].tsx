import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const EventDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.EventInner}>EventDetail</MainLayout>
}

export default EventDetail
