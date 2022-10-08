import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutMediaEnum } from 'types/common'
import { FormattedMessage } from 'react-intl'
import { materialNavigation } from 'data/navigation'

const Topik: NextPage = () => {
  return (
    <MainLayout mediaType={LayoutMediaEnum.TopikMaterials}>
      <h2 className='page-section-title py-3'>
        <FormattedMessage id='topik_materials' />
      </h2>
      <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
        Material Topik
      </ContentLayout>
    </MainLayout>
  )
}

export default Topik
