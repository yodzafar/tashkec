import cn from 'classnames'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeNewsData } from '../types'

type Props = HomeNewsData & {
  className?: string
}

export const HomeNewsitem = ({ title, path, className }: Props) => {
  const { locale } = useRouter()
  return (
    <Link href={path} locale={locale}>
      <a className={cn('flex justify-between items-center p-[20px]', className)}>
        <span>{title}</span>
        <ArrowForwardIcon />
      </a>
    </Link>
  )
}
