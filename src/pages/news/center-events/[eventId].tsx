import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { newsNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchEventsDetail } from 'models'
import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getContent, getTitle } from 'utils/common'
import { CommonDetail } from 'Components/UI/Detail'

const EventDetail: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.events)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='news'>
        <h2 className='page-section-title py-3 sm:block hidden'>{title}</h2>
        <ContentLayout parent='news' parentTitle='news' navigation={newsNavigation}>
          {
            detail && (
              <CommonDetail content={getContent(locale, {
                contentKr: detail.contentKr,
                contentRu: detail.contentRu,
                contentUz: detail.contentUz,
              })} />
            )
          }
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  if (query?.eventId && typeof query.eventId === 'string') {
    await store.dispatch(fetchEventsDetail(query.eventId))
  }

  return {
    props: {},
  }
})

export default EventDetail
