import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SectionHeading } from 'Components/UI/SectionHeading'
import Image from 'next/image'
import { useAppSelector } from 'hooks'

export const HomeBannerSlider = () => {
  const { list } = useAppSelector(state => state.slider)
  return (
    <>
      {
        list.length > 0
          ? (
            <section className='pb-[72px]'>
              <div className='mx-auto container px-4'>
                <SectionHeading>Banner</SectionHeading>
                <Splide options={{ arrows: list.length > 1, pagination: false }} className='home-banner'>
                  {
                    list.map(item => (
                      <SplideSlide key={item.id}>
                        <Image
                          width={1270}
                          height={362}
                          layout='responsive'
                          alt={item.attachment.path}
                          src={item.attachment.path}
                        />
                      </SplideSlide>
                    ))
                  }
                </Splide>
              </div>
            </section>
          )
          : null
      }
    </>
  )
}
