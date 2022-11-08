import { useAppSelector } from 'hooks'
import Image from 'next/image'
import { getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'

export const Gallery = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.gallery)

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-4'>
      {
        list.map(({ titleKr, titleUz, titleRu, ...item }, idx) => (
          <Link href={`/materials/gallery/${item.id}`} key={item.id} locale={locale}>
            <a className={`${idx === 0 ? 'lg:col-span-2' : 'lg:col-span-1'} block col-span-1`}>
              <div className='relative h-[268px]'>
                {
                  item.mainPhotoUrl &&
                  (
                    <Image
                      src={item.mainPhotoUrl}
                      layout='fill'
                      alt={getTitle(locale, { titleKr, titleRu, titleUz })}
                    />
                  )
                }
              </div>
              <div className='p-4 flex items-center justify-between text-white bg-bright-grey leading-6'>
                <span className='text-overflow'>{getTitle(locale, { titleKr, titleRu, titleUz })}</span>
                <ArrowForwardIcon />
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}