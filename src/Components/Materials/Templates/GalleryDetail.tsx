import { useAppSelector } from 'hooks'
import Image from 'next/image'

export const GalleryDetail = () => {
  const { detail } = useAppSelector(state => state.gallery)
  const { list } = useAppSelector(state => state.attachment)

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-24'>
      <div className='lg:col-span-3 col-span-1 h-[268px] relative'>
        {
          detail?.mainPhotoUrl && <Image src={detail.mainPhotoUrl} layout='fill' alt='main' />
        }
        {
          list.filter(item => !item.mainPhoto).map((x, idx) => (
            <div className='col-span-3 h-[268px] relative h-[268px]' key={x.id}>
              <Image src={x.thumbnailFilePath} layout='fill' alt={`gallery-${idx}`} />
            </div>
          ))
        }

      </div>
    </div>
  )
}