import { FormattedMessage } from 'react-intl'
import { FeatureList, HomeEventList, HomeNewsList, HomeSocialList, StudyInKoreaList } from '../Organisms'
import { HomePartnerList } from 'Components/Home/Organisms/PartnerList'

export const HomeMain = () => {
  return (
    <>
      <section className='home-main-section xl:pt-[100px] pt-[64px] xl:pb-4 pb-[76px]'>
        <div className='container mx-auto'>
          <FeatureList />
        </div>
        <div className='container mx-auto px-2'>
          <h2 className='mb-[50px] leading-[54px] text-[36px] text-white font-semibold text-center'>
            <FormattedMessage id='home' />
          </h2>
          <div className='lg:flex lg:px-0 px-[51px]'>
            <div className='lg:w-[50%]'>
              <HomeEventList />
            </div>
            <div className='lg:w-[50%]'>
              <StudyInKoreaList />
            </div>
          </div>
        </div>
      </section>
      <HomeNewsList />
      <HomeSocialList />
      <HomePartnerList />
    </>
  )
}
