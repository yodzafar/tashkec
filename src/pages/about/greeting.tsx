import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { aboutNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { Greeting } from 'Components/About'
import { wrapper } from 'store'
import { fetchGreeting } from 'models'

const GreetingPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={'greeting'} />
      <MainLayout pageTitle='greeting' background={LayoutBackground.Greeting}>
        <div className='container mx-auto px-2'>
          <h2 className='page-section-title py-3 sm:block hidden'>
            {t('greeting')}
          </h2>
        </div>
        <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
          <Greeting />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchGreeting())
  return {
    props: {},
  }
})

export default GreetingPage
