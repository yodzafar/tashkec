import { HomeMain } from 'Components/Home'
import { MainLayout } from 'Components/Layout'
import type { NextPage } from 'next'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchEvents, fetchGallery, fetchNews, fetchSliders, fetchStudy } from 'models'


const Home: NextPage = () => {
  return (
    <>
      <SEO title={'home_page'} />
      <MainLayout background={1} pageTitle='home'>
        <HomeMain />
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchSliders())
  await store.dispatch(fetchNews())
  await store.dispatch(fetchEvents())
  await store.dispatch(fetchStudy())
  await store.dispatch(fetchGallery({size: 4}))
  // await store.dispatch(fetchGreeting())
  // await store.dispatch(fetchCenterStructure())
  // await store.dispatch(fetchHistory())
  // await store.dispatch(fetchContacts())
  // await store.dispatch(fetchWorkPlans())
  // await store.dispatch(fetchTimeTable())
  // await store.dispatch(fetchStudy({studyTypeEnum: StudyTypeEnum.NEWS_OF_STUDY}))
  // await store.dispatch(fetchCulture({ koreanCultureType: KoreanCultureType.ADDITIONAL_LESSON }))
  // await store.dispatch(fetchEducation({ educationTypeEnum: EducationTypeEnum.SCHOOL }))
  // await store.dispatch(fetchGallery())
  // await store.dispatch(fetchTopikMaterials())
  // await store.dispatch(fetchTopikLevels('4302'))
  // await store.dispatch(fetchFaq())
  // await store.dispatch(fetchPartners())
  return {
    props: {},
  }
})


export default Home
