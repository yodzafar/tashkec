import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchEducation } from 'models'
import { Institution } from 'Components/Institution'

const Universities: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title='institution' />
      <MainLayout background={LayoutBackground.University} pageTitle='institution'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('institution')}
        </h2>
        <ContentLayout parent='institution' parentTitle='institution' navigation={[]}>
          <Institution />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
  const q: any = query?.type
  if(q) {
    await store.dispatch(fetchEducation({educationTypeEnum: q}))
  }
  return {
    props: {},
  }
})

export default Universities
