import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const ProgramGks: NextPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <SEO title='gks_program' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='gks_program'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('gks_program')}
        </h2>
        <ContentLayout parent='study-in-korea' parentTitle='study_in_korea' navigation={studyInKorea}>
          ProgramGks
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default ProgramGks
