import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { aboutNavigation } from 'data/navigation'
import { FormattedMessage } from 'react-intl'

const Greeting: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.Greeting}>
      <div className='container mx-auto px-2'>
        <h2 className='page-section-title py-3'>
          <FormattedMessage id='greeting' />
        </h2>
      </div>
      <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
        workplan
      </ContentLayout>
    </MainLayout>
  )
}

export default Greeting
