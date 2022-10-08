import { MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'

const WorkPlanDetail: NextPage = () => {
  return <MainLayout mediaType={LayoutMediaEnum.WorkPlanInner}>WorkPlanDetail</MainLayout>
}

export default WorkPlanDetail
