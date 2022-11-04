import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { aboutNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchHistory } from 'models'
import { History } from 'Components/About'

const OurHistory: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='our_history' />
      <MainLayout background={LayoutBackground.History} pageTitle='our_history'>
        <div className='container mx-auto px-2'>
          <h2 className='page-section-title py-3 sm:block hidden'>
            {t('our_history')}
          </h2>
        </div>
        <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
          <History />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchHistory())
  return {
    props: {},
  }
})

export default OurHistory
