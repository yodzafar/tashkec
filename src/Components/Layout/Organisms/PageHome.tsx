import { LayoutMediaEnum } from 'types/common'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'

type Props = {
  mediaType: LayoutMediaEnum
}

export const PageHome = ({ mediaType }: Props) => {
  return (
    <div className={cn(mediaType.toLowerCase(), 'page-home')}>
      <h1>
        <FormattedMessage id={mediaType.toLowerCase()} />
      </h1>
    </div>
  )
}
