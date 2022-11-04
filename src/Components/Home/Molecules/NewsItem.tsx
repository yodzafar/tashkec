import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeNewsData } from '../types'
import moment from 'moment'

type Props = HomeNewsData & {
  className?: string
}

export const HomeNewsItem = ({ title, path, className, date }: Props) => {
  const { locale } = useRouter()
  return (
    <Link href={path} locale={locale}>
      <a
        className={cn(
          'flex justify-between sm:flex-nowrap flex-wrap items-center font-medium py-3 hover:text-grape text-bright-grey border-b-[1px] border-alto',
          className,
        )}>
        <span className='text-overflow home-news-title'>{title}</span>
        {
          date
            ?
            <span className='text-manatee inline-block sm:ml-3 ml-auto'>
            {moment(date).utc().format('YYYY-MM-DD')}
          </span>
            : null}
      </a>
    </Link>
  )
}
