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

const CreativeMugs: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='creative_mugs' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='creative_mugs'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('creative_mugs')}
        </h2>
        <ContentLayout parent='korean-culture' parentTitle='korean_culture' navigation={koreanCulture}>
          <Culture subPath='creative-mugs' />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchCulture({ koreanCultureType: KoreanCultureType.ADDITIONAL_LESSON }))
  return {
    props: {},
  }
})

export default CreativeMugs
