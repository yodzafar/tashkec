import { ReactNode } from 'react'
import { LayoutMediaEnum } from 'types/common'
import { Footer, Header, HomeSlider, Navbar, PageHome } from '../Organisms'

type Props = {
  children: ReactNode
  mediaType: LayoutMediaEnum
}

export const MainLayout = ({ children, mediaType }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      {mediaType === LayoutMediaEnum.Slider ? <HomeSlider /> : <PageHome mediaType={mediaType} />}
      <div className='min-h-[870px] flex flex-col'>{children}</div>
      <Footer />
    </>
  )
}
