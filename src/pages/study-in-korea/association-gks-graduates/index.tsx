import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const Association: NextPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <SEO title='association_gks_graduates' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='association_gks_graduates'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('association_gks_graduates')}
        </h2>
        <ContentLayout parent='study-in-korea' parentTitle='study_in_korea' navigation={studyInKorea}>
          ProgramGks
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default Association
