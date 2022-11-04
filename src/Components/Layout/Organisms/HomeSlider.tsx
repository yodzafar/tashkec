import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from 'Components/Icons/Arrows'
import { HomeSliderTitleSvg } from 'Components/Icons/Home'
import { PauseCircleFilledIcon, PlayCircleFilledIcon } from 'Components/Icons/Media'
import { homeLinks } from 'data/app'
import { useRef, useState } from 'react'
import { HomeLinkItem } from '../Molecules'

const arr = [1, 2, 3]

export const HomeSlider = () => {
  const ref = useRef<Splide>(null)
  const [index, setIndex] = useState<number>(0)

  return (
    <div className='relative main-slider-wrapper text-white'>
      <div className='absolute left-[0] right-[0] top-[0] bottom-[0] z-20'>
        <div className='container mx-auto h-[100%] flex flex-col items-center justify-center pb-6'>
          <HomeSliderTitleSvg />
          <div className='mt-[60px] flex sm:flex-nowrap flex-wrap items-center justify-center'>
            {homeLinks.map((item, index) => (
              <div key={index} className='sm:mx-4 mx-2'>
                <HomeLinkItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Splide
        ref={ref}
        hasTrack={false}
        onMove={e => {
          setIndex(e.index)
        }}
        options={{
          type: 'loop',
          autoplay: true,
          arrows: false,
          pagination: false,
        }}>
        <div className='main-slider-control h-[44px] rounded-[22px] absolute'>
          <button onClick={() => ref.current?.go(index - 1)}>
            <ArrowLongLeftIcon />
          </button>
          <div className='home-slider-position'>{`${index + 1}/${arr.length}`}</div>
          <button className='splide__toggle' type='button'>
            <span className='splide__toggle__play'>
              <PlayCircleFilledIcon />
            </span>
            <span className='splide__toggle__pause'>
              <PauseCircleFilledIcon />
            </span>
          </button>
          <button onClick={() => ref.current?.go(index + 1)}>
            <ArrowLongRightIcon />
          </button>
        </div>
        <SplideTrack>
          {arr.map((item, idx) => (
            <SplideSlide key={item}>
              <div className={`main-slider-item slider-${idx + 1}`} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  )
}
