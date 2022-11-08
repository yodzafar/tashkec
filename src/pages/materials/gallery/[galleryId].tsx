import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchAttachments, fetchGalleryDetail } from 'models'
import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getTitle } from 'utils/common'
import { GalleryDetail } from 'Components/Materials'

const GalleryDetailPage: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.gallery)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='gallery'>
        <h2 className='page-section-title py-3 sm:block hidden'>{title}</h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={materialNavigation}>
          <GalleryDetail />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  if (query?.galleryId && typeof query.galleryId === 'string') {
    await store.dispatch(fetchGalleryDetail(query.galleryId))
    await store.dispatch(fetchAttachments({url: `photo-gallery/${query.galleryId}`}))
  }

  return {
    props: {},
  }
})


export default GalleryDetailPage
