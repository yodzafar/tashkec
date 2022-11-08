import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { koreanCulture } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchAttachments, fetchCultureDetail } from 'models'
import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getContent, getTitle } from 'utils/common'
import { CommonDetail } from 'Components/UI/Detail'

const CultureDetailPage: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.culture)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='korean_culture'>
        <h2 className='page-section-title py-3'>{title}</h2>
        <ContentLayout parent='korean-culture' parentTitle='korean_culture' navigation={koreanCulture}>
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
  if (query?.cultureId && typeof query.cultureId === 'string') {
    await store.dispatch(fetchCultureDetail(query.cultureId))
    await store.dispatch(fetchAttachments({url: `korean-culture/${query.cultureId}`}))
  }

  return {
    props: {},
  }
})

export default CultureDetailPage
