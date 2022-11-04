import { HomeSliderData } from '../types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import moment from 'moment/moment'

type Props = HomeSliderData

export const HomeSliderItem = ({ content, date, title, path }: Props) => {
  const { locale } = useRouter()
  return (
    <div
      className='rounded-[10px] border-t-[8px] border-bright-grey sm:p-[20px] p-3 bg-white text-bright-grey font-inter'>
      <div className='leading-[28px] mb-[20px]'>{moment(date).utc().format('YYYY-MM-DD')}</div>
      <Link href={path} locale={locale}>
        <a
          className='leading-[36px] pb-[20px] text-[18px] mb-[20px] font-semibold font-inter border-b-[1px] border-alto'>
          {title}
        </a>
      </Link>
      <p>
        <span className='text-overflow'>{content.replace(/(&nbsp;|<([^>]+)>)/ig, '')}</span>
      </p>
    </div>
  )
}
