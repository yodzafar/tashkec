import { ReactNode } from 'react'
import { Footer, Header, HomeSlider, Navbar, PageHome } from '../Organisms'
import { LayoutBackground } from 'data/background'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  children: ReactNode
  pageTitle: string
  background: LayoutBackground | 1
}

export const MainLayout = ({ children, background, pageTitle }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <Navbar />
      {
        background
          ? <>{background === 1
            ? <HomeSlider />
            : <PageHome background={background}>{t(pageTitle)}</PageHome>}</>
          : null
      }
      {children}
      <Footer />
    </>
  )
}
