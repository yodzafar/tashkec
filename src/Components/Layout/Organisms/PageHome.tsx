import { LayoutBackground } from 'data/background'
import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  background: LayoutBackground
  children: ReactNode
}

export const PageHome = ({ background, children }: Props) => {
  return (
    <div className='page-home'>
      <Image src={background} layout='fill' loading='lazy' alt='page-home-title' />
      <h1 className='sm:text-[32px] sm:leading-[48px] text-[20px] leading-[30px] font-semibold'>{children}</h1>
    </div>
  )
}
