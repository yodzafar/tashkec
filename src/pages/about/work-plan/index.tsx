import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { aboutNavigation } from 'data/navigation'

const WorkPlan: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.WorkPlan}>
      <div className='container mx-auto px-2'>
        <h2 className='page-section-title py-3'>
          <FormattedMessage id='work_plan' />
        </h2>
      </div>
      <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
        greeting
      </ContentLayout>
    </MainLayout>
  )
}

export default WorkPlan
