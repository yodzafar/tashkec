import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { materialNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const Topik: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title='topik_materials' />
      <MainLayout background={LayoutBackground.Material} pageTitle='topik_materials'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('topik_materials')}
        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          Material Topik
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default Topik
