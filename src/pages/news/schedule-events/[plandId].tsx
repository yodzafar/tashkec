import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { newsNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import { SEO } from 'Components/SEO'

const PlanDetail: NextPage = () => {
  return (
    <>
      <SEO title='PlanDetail' />
      <MainLayout pageTitle='work_plan' background={LayoutBackground.WorkPlan}>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
          PlanDetail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default PlanDetail
