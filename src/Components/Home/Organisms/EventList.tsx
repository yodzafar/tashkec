import { FormattedMessage } from 'react-intl'
import { HomeNewsitem } from '../Molecules'
import { HomeNewsData } from '../types'

export const HomeEventList = () => {
  const data: HomeNewsData[] = [
    { title: '2023년도 전기 특별전형 모집[한국학중앙연구원]', path: '/news/event/1' },
    { title: '2023학년도 전기 외국인특별전형 모집', path: '/news/event/2' },
    { title: '[고려대학교 국제대학] 2023년도 전기 외국인 특별전형 학부 신입학 모집', path: '/news/event/3' },
  ]

  return (
    <div className='p-[55px] bg-azure font-bold'>
      <h6 className='text-white text-[20px] leading-8 mb-[28px]'>
        <FormattedMessage id='center_events' />
      </h6>
      <div className='grid grid-cols-1 gap-y-[28px]'>
        {data.map((item, idx) => (
          <HomeNewsitem key={idx} title={item.title} path={item.path} className='bg-white text-azure' />
        ))}
      </div>
    </div>
  )
}
