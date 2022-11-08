import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchGallery } from 'models'
import { Gallery } from 'Components/Materials'

const GalleryPage: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title='gallery' />
      <MainLayout background={LayoutBackground.Gallery} pageTitle='gallery'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('gallery')}
        </h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={materialNavigation}>
          <Gallery />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchGallery())
  return {
    props: {},
  }
})

export default GalleryPage
