import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { aboutNavigation } from 'data/navigation'

const OurHistory: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.OurHistory}>
      <div className='container mx-auto px-2'>
        <h2 className='page-section-title py-3'>
          <FormattedMessage id='our_history' />
        </h2>
      </div>
      <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
        History
      </ContentLayout>
    </MainLayout>
  )
}

export default OurHistory
