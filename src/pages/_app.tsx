import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/globals.scss'
import { wrapper } from 'store'
import App, { AppContext, AppProps } from 'next/app'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default wrapper.withRedux(MyApp)
