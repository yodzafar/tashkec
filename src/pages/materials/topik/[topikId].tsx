import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'

const TopikDetail: NextPage = () => {
  return (
    <>
      <SEO title='Material Topik detail' />
      <MainLayout background={LayoutBackground.Material} pageTitle='topik_materials'>
        <h2 className='page-section-title py-3 sm:block hidden'>

        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          Material Topik detail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default TopikDetail
