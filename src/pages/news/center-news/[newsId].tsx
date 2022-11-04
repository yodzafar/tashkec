import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { newsNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'

const NewsDetail: NextPage = () => {
  return (
    <>
      <SEO title='News detail' />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='gallery'>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={newsNavigation}>
          News detail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default NewsDetail
