import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { materialNavigation } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchFaqDetail } from 'models'
import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getContent, getTitle } from 'utils/common'
import { CommonDetail } from 'Components/UI/Detail'

const FaqDetailPage: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.faq)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='faq'>
        <h2 className='page-section-title py-3 sm:block hidden'>{title}</h2>
        <ContentLayout parent='materials' parentTitle='materials' navigation={materialNavigation}>
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
  if (query?.faqId && typeof query.faqId === 'string') {
    await store.dispatch(fetchFaqDetail(query.faqId))
  }

  return {
    props: {},
  }
})

export default FaqDetailPage
