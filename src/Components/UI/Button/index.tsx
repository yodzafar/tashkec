import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-azure text-white leading-[34px] xl:px-[16px] xl:py-[11px] py-1  min-w-[212px] xl:text-[22px] font-semibold',
        className,
      )}></button>
  )
}
