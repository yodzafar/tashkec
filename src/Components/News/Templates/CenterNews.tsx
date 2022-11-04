import { useAppSelector } from 'hooks'
import { NewsItem } from 'Components/News/Molecules'

export const CenterNews = () => {
  const { list } = useAppSelector(state => state.news)

  return (
    <div>
      {list.map((item) => <NewsItem path={`/news/center-news/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}