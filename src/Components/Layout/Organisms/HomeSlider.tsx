import { Button } from 'Components/UI/Button'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

export const HomeSlider = () => {
  return (
    <div className='relative'>
      <Image width={100} height={42} layout='responsive' objectFit='cover' src='/images/home_bg.jpg' />
      <div className='absolute left-[0] right-[0] top-[0] flex flex-col justify-center bottom-[0]'>
        <div className='container mx-auto'>
          <p className='font-semibold text-[22px] text-grey-semi mb-[20px] leading-8'>
            <FormattedMessage id='home_greeting' />
          </p>
          <div className='w-[68px] h-[5px] bg-blue mb-4' />
          <h1 className='text-[36px] leading-[54px] font-semibold text-blue mb-4'>
            <FormattedMessage id='home_title' />
          </h1>
          <p className='text-grey-semi font-medium text-[22px] leading-8 max-w-[650px] 2xl:max-w-[800px] mb-[40px]'>
            <FormattedMessage id='home_description' />
          </p>
          <Button>
            <FormattedMessage id='read_more' />
          </Button>
        </div>
      </div>
    </div>
  )
}
