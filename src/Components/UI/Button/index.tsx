import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-bright-grey text-white leading-8 xl:px-[16px] xl:py-[11px] py-3 font-semibold',
        className,
      )}></button>
  )
}
