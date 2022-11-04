import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { koreanCulture } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'

const CreativeMugs: NextPage = () => {
  const {t} = useTranslation()
  return (
    <>
      <SEO title='creative_mugs' />
      <MainLayout background={LayoutBackground.Timetable} pageTitle='creative_mugs'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('creative_mugs')}
        </h2>
        <ContentLayout parent='korean-culture' parentTitle='korean_culture' navigation={koreanCulture}>
          creative_mugs
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default CreativeMugs
