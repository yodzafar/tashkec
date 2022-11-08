import { MainLayout } from 'Components/Layout'
import type { NextPage } from 'next'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchEvents, fetchGallery, fetchNews, fetchSliders, fetchStudy } from 'models'
import dynamic from 'next/dynamic'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const HomeMain = dynamic(() => import('../Components/Home/Templates/Main'))

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
  return {
    props: {},
  }
})


export default Home
