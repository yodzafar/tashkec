import { useAppSelector } from 'hooks'
import { getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import { useMemo } from 'react'

export const History = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.history)
  const bottomLine = useMemo(() => {
    const tmp: number[] = []
    for (let i = 0; i < Math.floor(list.length / 3); i++) {
      tmp.push(i + 1)
    }
    return tmp
  }, [list.length])

  return (
    <div className='relative'>

      {
        bottomLine.map(item => (
          <div
            key={item}
            className='h-[1px] absolute bg-light-grey left-[0] w-[100%] md: block hidden'
            style={{ top: `${(item * 213) + ((item - 1) * 12)}px` }}
          />
        ))
      }
      <ul className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 sm:gap-y-[25px] gap-y-0 list-disc list-inside'>
        {
          list.map(({ titleKr, titleRu, titleUz, ...item }) => (
            <li key={item.id}
                className='flex history-item py-2 flex-col justify-center text-dove-grey h-0 lg:h-[200px] border-b-[1px] sm:border-b-0 border-b-[1px] sm:px-0 sm:px-5 sm:border-r-[1px] border-r-0 border-light-grey'>
            <span className='font-semibold text-sm leading-[21px] inline-block mb-1'>
              {getTitle(locale, { titleKr, titleRu, titleUz })}
            </span>
              <span className='inline-block ml-auto text-[12px] leading-[18px]'>
              {moment(item.publishedDate).utc().format('YYYY.MM.DD')}
            </span>
            </li>
          ))
        }
      </ul>
    </div>

  )
}