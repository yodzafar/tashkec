import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { newsNavigation } from 'data/navigation'

const Events: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.CenterEvents}>
      <h2 className='page-section-title py-3'>
        <FormattedMessage id='center_events' />
      </h2>
      <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
        News
      </ContentLayout>
    </MainLayout>
  )
}

export default Events