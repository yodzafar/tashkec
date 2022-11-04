import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { newsNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { CenterNews } from 'Components/News'
import { wrapper } from 'store'
import { fetchNews } from 'models'

const NewsPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='center_news' />
      <MainLayout background={LayoutBackground.News} pageTitle='center_news'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('center_news')}
        </h2>
        <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
          <CenterNews />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchNews())
  return {
    props: {},
  }
})

export default NewsPage
