import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

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
          news_about_studying_in_korea
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default News
