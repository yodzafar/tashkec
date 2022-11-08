import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  title: string
  noTranslation?: boolean
}

export const SEO = ({ title, noTranslation }: Props) => {
  const { t } = useTranslation()
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta content='True' name='HandheldFriendly' />
      <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
      <title>{noTranslation ? title : t(title)}</title>
    </Head>
  )
}