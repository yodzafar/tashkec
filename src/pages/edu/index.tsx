import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { newsNavigation } from 'data/navigation'

const Education: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.StudyInKorea}>
      <h2 className='page-section-title py-3'>
        <FormattedMessage id='study_in_korea' />
      </h2>
      <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
        Study in Korea
      </ContentLayout>
    </MainLayout>
  )
}

export default Education
