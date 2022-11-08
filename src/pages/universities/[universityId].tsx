import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchAttachments, fetchEducationDetail } from 'models'
import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getContent, getTitle } from 'utils/common'
import { CommonDetail } from 'Components/UI/Detail'

const UniversityDetail: NextPage = () => {
  const { locale } = useRouter()
  const { detail } = useAppSelector(state => state.education)
  const title = useMemo(() => {
    const d = detail
    return d
      ? getTitle(locale, { titleKr: d.titleKr, titleRu: d.titleRu, titleUz: d.titleUz })
      : ''
  }, [detail, locale])

  return (
    <>
      <SEO title={title} noTranslation />
      <MainLayout background={LayoutBackground.University} pageTitle='institution'>
        <h2 className='page-section-title py-3 sm:block hidden'>{title}</h2>
        <ContentLayout parent='institution' parentTitle='institution' navigation={[]}>
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
  if (query?.universityId && typeof query.universityId === 'string') {
    await store.dispatch(fetchEducationDetail(query.universityId))
    await store.dispatch(fetchAttachments({url: `education-files/${query.universityId}`}))
  }

  return {
    props: {},
  }
})

export default UniversityDetail
