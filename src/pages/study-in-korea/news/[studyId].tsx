import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { studyInKorea } from 'data/navigation'
import { SEO } from 'Components/SEO'
import { useRouter } from 'next/router'
import { wrapper } from 'store'
import { fetchAttachments, fetchStudyDetail } from 'models'
import { CommonDetail } from 'Components/UI/Detail'
import { useAppSelector } from 'hooks'
import { getContent, getTitle } from 'utils/common'
import { useMemo } from 'react'

const StudyDetailPage: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.study)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.GalleryInner} pageTitle='study_in_korea'>
        <h2 className='page-section-title py-3 sm:block hidden'>{title}</h2>
        <ContentLayout parent='study-in-korea' parentTitle='study_in_korea' navigation={studyInKorea}>
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
  if (query?.studyId && typeof query.studyId === 'string') {
    await store.dispatch(fetchStudyDetail(query.studyId))
    await store.dispatch(fetchAttachments({url: `study-in-korea/${query.studyId}`}))
  }

  return {
    props: {},
  }
})

export default StudyDetailPage
