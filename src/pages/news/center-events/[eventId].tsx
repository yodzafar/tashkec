import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { newsNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'

const EventDetail: NextPage = () => {
  return (
    <>
      <SEO title='Event detail' />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='gallery'>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={newsNavigation}>
          Event detail
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default EventDetail
