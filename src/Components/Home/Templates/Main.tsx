import { SectionHeading } from 'Components/UI/SectionHeading'
import { FormattedMessage } from 'react-intl'
import { HomeEventList, HomeNewsList } from '../Organisms'

export const HomeMain = () => {
  return (
    <section className='home-main-section pt-[100px] pb-4'>
      <SectionHeading className='mb-[50px]'>
        <FormattedMessage id='home' />
      </SectionHeading>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-[50%]'>
            <HomeNewsList />
          </div>
          <div className='w-[50%]'>
            <HomeEventList />
          </div>
        </div>
      </div>
    </section>
  )
}
