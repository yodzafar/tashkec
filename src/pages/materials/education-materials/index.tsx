import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const EducationMaterials: NextPage = () => {
  const {t} = useTranslation()

  return (
    <>
      <SEO title='education_materials' />
      <MainLayout background={LayoutBackground.Material} pageTitle='education_materials'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('education_materials')}
        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          Material Topik
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default EducationMaterials
