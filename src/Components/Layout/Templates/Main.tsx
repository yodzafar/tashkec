import { ReactNode, useMemo } from 'react'
import { LayoutMediaEnum } from 'types/common'
import { Footer, Header, HomeSlider, Navbar } from '../Organisms'

type Props = {
  children: ReactNode
  mediaType: LayoutMediaEnum
}

export const MainLayout = ({ children, mediaType }: Props) => {
  const mediaContent: ReactNode = useMemo(() => {
    switch (mediaType) {
      case LayoutMediaEnum.Slider:
        return <HomeSlider />
      default:
        return <></>
    }
  }, [mediaType])

  return (
    <>
      <Header />
      <Navbar />
      {mediaContent}
      {children}
      <Footer />
    </>
  )
}
