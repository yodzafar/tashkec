import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { aboutNavigation } from 'data/navigation'

const ContactInfo: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.OurAddress}>
      <h2 className='page-section-title py-3'>
        <FormattedMessage id='our_address' />
      </h2>
      <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
        Our Address
      </ContentLayout>
    </MainLayout>
  )
}

export default ContactInfo
