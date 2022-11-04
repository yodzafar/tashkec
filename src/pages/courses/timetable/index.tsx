import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { koreanCourse } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const Timetable: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='timetable_of_classes_korean_language' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='timetable_of_classes_korean_language'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('timetable_of_classes_korean_language')}
        </h2>
        <ContentLayout parent='courses' parentTitle='courses' navigation={koreanCourse}>
          Time table
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default Timetable
