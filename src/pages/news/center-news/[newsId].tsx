import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { newsNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { useRouter } from 'next/router'
import { wrapper } from 'store'
import { fetchNewsDetail } from 'models'
import { CommonDetail } from 'Components/UI/Detail'
import { useAppSelector } from 'hooks'
import { getContent, getTitle } from 'utils/common'
import { useMemo } from 'react'

const NewsDetail: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.news)
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
        <ContentLayout parent='news' parentTitle='materials' navigation={newsNavigation}>
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
  if (query?.newsId && typeof query.newsId === 'string') {
    await store.dispatch(fetchNewsDetail(query.newsId))
  }

  return {
    props: {},
  }
})

export default NewsDetail
