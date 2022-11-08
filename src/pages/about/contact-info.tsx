import { ContentLayout, MainLayout } from 'Components/Layout'
import { NextPage } from 'next'
import { aboutNavigation } from 'data/navigation'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'
import { SEO } from 'Components/SEO'
import { wrapper } from 'store'
import { fetchContacts } from 'models'
import dynamic from 'next/dynamic'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Address = dynamic(() => import('../../Components/About/Templates/Address'))

const ContactInfoPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title='our_address' />
      <MainLayout background={LayoutBackground.ContactInfo} pageTitle='our_address'>
        <h2 className='page-section-title py-3 sm:block hidden'>
          {t('our_address')}
        </h2>
        <ContentLayout parent='about' parentTitle='about_the_institute' navigation={aboutNavigation}>
          <Address />
        </ContentLayout>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchContacts())
  return {
    props: {},
  }
})

export default ContactInfoPage
