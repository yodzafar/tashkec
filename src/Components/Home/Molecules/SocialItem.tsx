import { Social } from 'types/common'
import cn from 'classnames'
import Link from 'next/link'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'

type Props = Social & {
  className?: string
}

export const HomeSocialItem = ({ type, className, path, icon }: Props) => {
  const Icon = icon
  return (
    <Link href={path} target='_blank'>
      <a className={cn('flex text-white items-center p-3', className)}>
        <Icon />
        <span className='inline-block ml-[10px] mr-auto'>{type}</span>
        <ArrowForwardIcon />
      </a>
    </Link>
  )
}
