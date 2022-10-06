import { FormattedMessage } from 'react-intl'
import { HomeNewsitem } from '../Molecules'
import { HomeNewsData } from '../types'

export const HomeNewsList = () => {
  const data: HomeNewsData[] = [
    { title: 'Информация о проведении 84-го Международного экз...', path: '/news/center/1' },
    { title: 'KOREA WEEK 2022', path: '/news/center/2' },
    { title: 'Объявление о вакансии на должность ассистента', path: '/news/center/3' },
  ]

  return (
    <div className='p-[55px] bg-blue font-bold'>
      <h6 className='text-white text-[20px] leading-8 mb-[28px]'>
        <FormattedMessage id='center_news' />
      </h6>
      <div className='grid grid-cols-1 gap-y-[28px]'>
        {data.map((item, idx) => (
          <HomeNewsitem key={idx} title={item.title} path={item.path} className='bg-white text-blue' />
        ))}
      </div>
    </div>
  )
}
