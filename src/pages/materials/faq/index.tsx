import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'

import { materialNavigation } from 'data/navigation'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const Faq: NextPage = () => {
  const {t} = useTranslation()

  return (
    <>
      <SEO title='faq' />
      <MainLayout background={LayoutBackground.FAQ} pageTitle='faq'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('faq')}
        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          FAQ
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default Faq
