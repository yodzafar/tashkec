import { useAppSelector } from 'hooks'
import { ListItem } from 'Components/UI/ListItem'

type Props = {
  subPath: string
}

export const Study = ({ subPath }: Props) => {
  const { list } = useAppSelector(state => state.study)

  return (
    <div>
      {list.map((item) => <ListItem path={`/study-in-korea/${subPath}/${item.id}`} key={item.id} {...item} />)}
    </div>
  )
}