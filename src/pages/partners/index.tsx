import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchPartners } from 'models'
import { Partners } from 'Components/About'

const PartnersPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='partners' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='partners'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('partners')}
        </h2>
        <ContentLayout parent='partners' parentTitle='partners' navigation={[]}>
          <Partners />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchPartners())
  return {
    props: {},
  }
})

export default PartnersPage
