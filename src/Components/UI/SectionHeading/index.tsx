import { FC, ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export const SectionHeading: FC<Props> = ({ className, children }) => (
  <h2 className={`text-white font-semibold text-center ${className || ''} text-mine-shaft`}>{children}</h2>
)
