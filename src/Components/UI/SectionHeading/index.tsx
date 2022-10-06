import cn from 'classnames'
import { FC, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'

type Props = {
  className?: string
  children: ReactNode
}

export const SectionHeading: FC<Props> = ({ className, children }) => (
  <h2 className={cn('text-white text-[36px] leading-[54px] font-semibold text-center', className)}>{children}</h2>
)
