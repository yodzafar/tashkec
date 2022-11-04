import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { newsNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchEvents } from 'models'
import { CenterEvents } from 'Components/News'

const EventsPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='center_events' />
      <MainLayout background={LayoutBackground.Events} pageTitle='center_events'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('center_events')}
        </h2>
        <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
          <CenterEvents />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchEvents())
  return {
    props: {},
  }
})

export default EventsPage
