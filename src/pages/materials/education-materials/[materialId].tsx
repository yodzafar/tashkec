import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'

const EducationMaterialDetail: NextPage = () => {
  return (
    <>
      <SEO title='EducationMaterialDetail' />
      <MainLayout background={LayoutBackground.Material} pageTitle='topik_materials'>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          EducationMaterialDetail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default EducationMaterialDetail
