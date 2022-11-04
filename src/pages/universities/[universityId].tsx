import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import { SEO } from 'Components/SEO'

const UniversityDetail: NextPage = () => {
  return (
    <>
      <SEO title='institution detail' />
      <MainLayout background={LayoutBackground.University} pageTitle='institution'>
        <h2 className='page-section-title py-3 sm:block hidden'>
        </h2>
        <ContentLayout parent='institution' parentTitle='institution' navigation={[]}>
          institution
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export default UniversityDetail
