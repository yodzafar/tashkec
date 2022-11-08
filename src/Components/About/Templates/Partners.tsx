import { useAppSelector } from 'hooks'
import { getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArrowRightIcon } from 'Components/Icons/Arrows'

export const Partners = () => {
  const { list } = useAppSelector(state => state.partners)
  const { locale } = useRouter()
  return (
    <div>
      {
        list.map(({ titleRu, titleUz, titleKr, ...item }) => (
          <div
            key={item.id}
            className='flex items-center flex-col justify-center text-center p-4 border-[1px] border-light-grey mb-4'
          >
            <h4 className='sm:text-[20px] text-[18px] font-bold sm:leading-[44px] leading-[40px] mb-4'>{getTitle(locale, {
              titleKr,
              titleRu,
              titleUz,
            })}</h4>
            <div className='h-[116px] w-[100%] relative mb-4'>
              <Image
                layout='fill'
                objectFit='contain'
                src={item.attachment.path}
                alt={getTitle(locale, { titleKr, titleRu, titleUz })}
              />
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2 w-[100%] text-white'>
              {
                item.webUrl.length > 0 && (
                  <a href={item.webUrl} className='p-4 bg-bright-grey flex  justify-between items-center'>
                    Website
                    <ArrowRightIcon />
                  </a>
                )
              }

              {
                item.youtubeUrl && (
                  <a href={item.youtubeUrl} className='p-4 bg-[#FA4D4D] flex  justify-between items-center'>
                    Youtube
                    <ArrowRightIcon />
                  </a>
                )
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}