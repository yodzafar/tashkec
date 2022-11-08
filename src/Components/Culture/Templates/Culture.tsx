import { useAppSelector } from 'hooks'
import { ListItem } from 'Components/UI/ListItem'

type Props = {
  subPath: string
}

export const Culture = ({ subPath }: Props) => {
  const { list } = useAppSelector(state => state.culture)

  return (
    <div>
      {list.map((item) => <ListItem path={`/korean-culture/${subPath}/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}