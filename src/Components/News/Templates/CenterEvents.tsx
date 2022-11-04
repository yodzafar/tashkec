import { useAppSelector } from 'hooks'
import { NewsItem } from 'Components/News/Molecules'

export const CenterEvents = () => {
  const { list } = useAppSelector(state => state.events)

  return (
    <div>
      {list.map((item) => <NewsItem path={`/news/center-events/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}