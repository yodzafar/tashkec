import { useRouter } from 'next/router'
import { useAppSelector } from 'hooks'
import { getContent } from 'utils/common'

export const CenterStructure = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.structure)
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