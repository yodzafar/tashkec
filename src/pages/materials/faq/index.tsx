import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'

import { materialNavigation } from 'data/navigation'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchFaq } from 'models'
import { Faq } from 'Components/Materials'

const FaqPage: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title='faq' />
      <MainLayout background={LayoutBackground.FAQ} pageTitle='faq'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('faq')}
        </h2>
        <ContentLayout parent='materials' parentTitle='education_materials' navigation={materialNavigation}>
          <Faq />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchFaq())
  return {
    props: {},
  }
})

export default FaqPage
