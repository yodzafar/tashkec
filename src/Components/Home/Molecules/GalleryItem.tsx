import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  imageUrl?: string | null
  title: string
  id: number
}

export const HomeGalleryItem = ({ imageUrl, title, id }: Props) => {
  const {t} = useTranslation()
  const { locale } = useRouter()
  return (
    <div className='border-t-[8px] border-bright-grey flex flex-col bg-white'>
      {imageUrl ? <Image src={imageUrl} alt={title} width={100} height={50} layout='responsive' /> : null}
      <div className='py-[44px] px-4'>
        <h6 className='text-[20px] leading-[30px] mb-[45px] font-semibold pb-[14px] border-b-[1px] max-w-[470px] text-bright-grey border-alto'>
          {title}
        </h6>
        <Link href={`/materials/gallery/${id}`} locale={locale}>
          <a className='text-[18px] hover:text-grape font-bold leading-[27px] text-bright-grey'>
            {t('read_more')}
          </a>
        </Link>
      </div>
    </div>
  )
}
