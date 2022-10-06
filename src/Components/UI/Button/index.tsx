import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn('bg-blue text-white leading-[34px] px-[16px] py-[11px] min-w-[212px] text-[22px] font-semibold', className)}></button>
  )
}
