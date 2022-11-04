import { FC, ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactNode
  className?: string
}

export const SectionHeading: FC<Props> = ({ children, className }) => (
  <div className={cn('flex justify-center text-center', className)}>
    <div className='text-2xl bg-bright-grey min-w-[210px] leading-[30px] py-[7px] text-center font-inter text-white mb-[52px]'>
      {children}
    </div>
  </div>
)
