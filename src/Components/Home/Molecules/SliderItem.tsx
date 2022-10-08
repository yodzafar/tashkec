import cn from 'classnames'
import { HomeSliderData } from '../types'

type Props = HomeSliderData & {
  className?: string
}

export const HomeSliderItem = ({ className, content, date, title }: Props) => {
  return (
    <div className={cn('h-[212px] py-[43px] px-2 font-medium bg-white rounded-[8px]', className)}>
      <h6 className='mb-3 text-denim'>
        <span>{title}</span>
      </h6>
      <p className='mb-3 text-denim'>{content}</p>

      <small className='text-[10px] leading-[12px] font-normal text-black'>{date}</small>
    </div>
  )
}
