import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const ProgramsForCompatriots: NextPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <SEO title='programs_for_compatriots' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='programs_for_compatriots'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('programs_for_compatriots')}
        </h2>
        <ContentLayout parent='study-in-korea' parentTitle='study_in_korea' navigation={studyInKorea}>
          programs_for_compatriots
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default ProgramsForCompatriots
