import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchStudy } from 'models'
import { StudyTypeEnum } from 'entities/news'
import { Study } from 'Components/Study'

const News: NextPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <SEO title='news_about_studying_in_korea'/>
      <MainLayout background={LayoutBackground.Timetable} pageTitle='news_about_studying_in_korea'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('news_about_studying_in_korea')}
        </h2>
        <ContentLayout parent='study-in-korea' parentTitle='study_in_korea' navigation={studyInKorea}>
          <Study subPath='news' />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchStudy({ studyTypeEnum: StudyTypeEnum.NEWS_OF_STUDY }))
  return {
    props: {},
  }
})

export default News
