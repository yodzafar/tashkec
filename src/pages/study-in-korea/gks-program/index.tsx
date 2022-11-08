import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { studyInKorea } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { Study } from 'Components/Study'
import { wrapper } from 'store'
import { fetchStudy } from 'models'
import { StudyTypeEnum } from 'entities/news'

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
          <Study subPath='gks-program' />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchStudy({ studyTypeEnum: StudyTypeEnum.PROGRAM_OF_GKS }))
  return {
    props: {},
  }
})

export default ProgramGks
