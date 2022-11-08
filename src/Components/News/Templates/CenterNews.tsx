import { useAppSelector } from 'hooks'
import { ListItem } from 'Components/UI/ListItem'

export const CenterNews = () => {
  const { list } = useAppSelector(state => state.news)

  return (
    <div>
      {list.map((item) => <ListItem path={`/news/center-news/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}