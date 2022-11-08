import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { koreanCulture } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchCulture } from 'models'
import { KoreanCultureType } from 'entities/culture'
import { Culture } from 'Components/Culture'

const KoreanCultureAbout: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='getting_to_know_the_culture_of_korea' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='getting_to_know_the_culture_of_korea'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('getting_to_know_the_culture_of_korea')}
        </h2>
        <ContentLayout parent='korean-culture' parentTitle='korean_culture' navigation={koreanCulture}>
          <Culture subPath='about' />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchCulture({ koreanCultureType: KoreanCultureType.INTRODUCE_KOREAN_CULTURE }))
  return {
    props: {},
  }
})

export default KoreanCultureAbout
