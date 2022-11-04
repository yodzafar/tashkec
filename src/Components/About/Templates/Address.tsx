import { useAppSelector } from 'hooks'
import { useMemo } from 'react'
import { getContent } from 'utils/common'
import { useRouter } from 'next/router'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

export const Address = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.contacts)
  const item = useMemo(() => list.length > 0 ? list[0] : null, [list])

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <div>
        {
          item
            ? (
              <>
                <div className='mb-6' dangerouslySetInnerHTML={{
                  __html: getContent(locale, {
                    contentKr: item.contentKr,
                    contentUz: item.contentUz,
                    contentRu: item.contentRu,
                  }),
                }}
                />
                <div className='flex flex-col font-semibold text-bright-grey mb-5'>
                  {item.phoneNumber.split(',').map((item, idx) => <span key={idx}>{item}</span>)}
                </div>

                <div className='flex flex-col font-semibold text-bright-grey'>
                  {item.contactEmail.split(',').map((item, idx) => <span key={idx}>{item}</span>)}
                </div>

              </>
            )
            : null
        }

      </div>
      <div>
        <YMaps>
          <Map
            className='w-[100%] lg:h-[400px] h-[300px]'
            defaultState={{ center: [41.275758, 69.301782], zoom: 17 }}
          >
            <Placemark geometry={[41.275758, 69.301782]} />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}