type Props = {
  content: string
}

export const CommonDetail = ({content}:Props) => {
  return (
    <div dangerouslySetInnerHTML={{__html: content}} />
  )
}