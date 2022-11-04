import { useAppSelector } from 'hooks'
import { useRouter } from 'next/router'
import { getContent } from 'utils/common'

export const Greeting = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.greeting)
  return (
    <>
      {
        list.length > 0
          ? <div dangerouslySetInnerHTML={{
            __html: getContent(locale, {
              contentKr: list[0].contentKr,
              contentUz: list[0].contentUz,
              contentRu: list[0].contentRu
            }),
          }} />
          : null
      }
    </>
  )
}