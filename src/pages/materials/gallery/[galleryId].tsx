import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'

const GalleryDetail: NextPage = () => {
  return (
    <>
      <SEO title='GalleryDetail' />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='gallery'>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={materialNavigation}>
          GalleryDetail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default GalleryDetail
