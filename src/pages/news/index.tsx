import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { newsNavigation } from 'data/navigation'

const News: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.CenterNews}>
      <h2 className='page-section-title py-3'>
        <FormattedMessage id='center_news' />
      </h2>
      <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
        News
      </ContentLayout>
    </MainLayout>
  )
}

export default News
