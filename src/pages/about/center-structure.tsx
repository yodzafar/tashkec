import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { aboutNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { CenterStructure } from 'Components/About'
import { wrapper } from 'store'
import { fetchCenterStructure } from 'models'

const CenterStructurePage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='center_structure' />
      <MainLayout background={LayoutBackground.Structure} pageTitle='center_structure'>
        <div className='container mx-auto px-2'>
          <h2 className='page-section-title py-3 sm:block hidden'>
            {t('center_structure')}
          </h2>
        </div>
        <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
          <CenterStructure />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchCenterStructure())
  return {
    props: {},
  }
})

export default CenterStructurePage
