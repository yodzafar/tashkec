import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ArrowLeftIcon, ArrowRightIcon } from 'Components/Icons/Arrows'
import { useEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { HomeSliderData } from '../types'
import { HomeSliderItem } from 'Components/Home/Molecules'

const data: HomeSliderData[] = [
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
  {
    title: '한국 무예 문화 전파를 위한 ...',
    content: '[첨부] 한국 무예 문화 전파를 위한 “태권도 교실” 상시 운영.pdf ',
    date: '2022-09-19',
  },
]

export const HomeNewsList = () => {
  const [start] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<any>(null)

  const calculateWidth = () => {
    if (ref.current) {
      setSliderWidth(ref.current.offsetLeft + ref.current.offsetWidth)
    }
  }

  useEffect(() => {
    calculateWidth()
    window.addEventListener('resize', calculateWidth)

    return () => {
      window.removeEventListener('resize', calculateWidth)
    }
  }, [])

  const handleClick = () => {
    if (sliderRef.current) {
      console.log(sliderRef.current)
    }
  }

  return (
    <section className='bg-azure xl:pt-[100px] pt-[64px] pb-[84px] xl:pb-[120px] relative'>
      <div className='container mx-auto px-2'>
        <div className='flex items-stretch justify-start'>
          <div ref={ref} className='h-[240px] pt-2 home-news-detail text-white flex flex-col items-center w-[280px] xl:2-[360px]'>
            <h2 className='leading-[83px] mb-1 xl:text-[36px] text-[28px] text-white font-semibold text-center'>
              <FormattedMessage id='center_news' />
            </h2>
            <p className='font-medium leading-[20px] mb-[35px]'>한국검인정교과서협회 도서 나눔식 개최</p>
            <div className='flex'>
              <button
                onClick={handleClick}
                className='w-[42px] h-[42px] flex items-center justify-center bg-white text-azure rounded-full mr-3'>
                <ArrowLeftIcon />
              </button>
              <button onClick={handleClick} className='w-[42px] h-[42px] flex items-center justify-center bg-white text-azure rounded-full'>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute rounded-1 right-[0] xl:top-[100px] top-[64px] left-auto' style={{ left: `${sliderWidth + 54}px` }}>
        <div className='home-news-slider-wrapper xl:py-[48px] py-4 pl-4 flex flex-col justify-center rounded-[8px]'>
          <Splide
            ref={sliderRef}
            options={{
              rewind: true,
              fixedWidth: 263,
              arrows: false,
              pagination: false,
              useScroll: true,
              gap: 24,
              type: 'loop',
              start,
            }}>
            {data.map((item, idx) => (
              <SplideSlide key={idx} className='home-news-slider-item'>
                <HomeSliderItem className='home-news-slider-box' {...item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  )
}
