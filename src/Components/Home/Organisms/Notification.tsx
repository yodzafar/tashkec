import { HomeSliderItem, HomeStudyHeading } from 'Components/Home/Molecules'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useCallback, useRef, useState } from 'react'
import { useAppSelector } from 'hooks'
import { getContent, getTitle } from 'utils/common'
import { useRouter } from 'next/router'

export const HomeNotification = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.news)
  const sliderRef = useRef<Splide>(null)
  const [index, setIndex] = useState<number>(0)
  const [paused, setPaused] = useState(false)

  const onPlay = useCallback(() => {
    const splide = sliderRef.current?.splide
    if (splide) {
      if (paused) splide.Components.Autoplay.play()
      else splide.Components.Autoplay.pause()
    }
  }, [paused])

  const onMove = useCallback(
    (next: boolean) => {
      const splide = sliderRef.current
      if (splide) {
        if (next) splide.go(index + 1)
        else splide.go(index - 1)
      }
    },
    [index],
  )
  return (
    <>
      <HomeStudyHeading
        play={onPlay}
        isPause={paused}
        goToNext={() => onMove(true)}
        goToPrev={() => onMove(false)}
      />
      <div className='home-news-slider sm:py-5 sm:px-[65px] flex flex-col justify-center items-center sm:h-[403px]'>
        {
          list.length > 0
            ? (
              <Splide
                className='relative z-[5]'
                onMove={e => {
                  setIndex(e.index)
                }}
                onAutoplayPause={() => setPaused(true)}
                onAutoplayPlay={() => setPaused(false)}
                ref={sliderRef}
                options={{
                  type: 'loop',
                  pagination: false,
                  arrows: false,
                  perPage: 1,
                  width: '100%',
                  autoplay: true,
                  gap: 16,
                }}>
                {list.map((item, idx) => {
                  const { titleUz, titleRu, titleKr, contentKr, contentUz, contentRu } = item
                  return (
                    <SplideSlide key={idx}>
                      <HomeSliderItem
                        content={getContent(locale, {contentRu, contentUz, contentKr})}
                        title={getTitle(locale, { titleUz, titleRu, titleKr })}
                        date={item.publishedDate}
                        path={`/news/center-news/${item.id}`}
                      />
                    </SplideSlide>
                  )
                })}
              </Splide>
            )
            : null
        }
      </div>
    </>
  )
}