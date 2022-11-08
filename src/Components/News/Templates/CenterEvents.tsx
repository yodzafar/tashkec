import { useAppSelector } from 'hooks'
import { ListItem } from 'Components/UI/ListItem'

export const CenterEvents = () => {
  const { list } = useAppSelector(state => state.events)

  return (
    <div>
      {list.map((item) => <ListItem path={`/news/center-events/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}