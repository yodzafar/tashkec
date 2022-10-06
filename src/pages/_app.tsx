import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import ru from 'lang/ru.json'
import uz from 'lang/uz.json'
import kr from 'lang/kr.json'

import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const messages: { [key: string]: {} } = { uz, ru, kr }

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  return (
    <IntlProvider locale={locale || 'kr'} messages={locale ? messages[locale] : messages['kr']}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
