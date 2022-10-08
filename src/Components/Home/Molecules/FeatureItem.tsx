import Link from 'next/link'
import { MenuBookIcon } from 'Components/Icons/Menu'
import { FormattedMessage } from 'react-intl'
import { FeatureData } from 'Components/Home/types'

type Props = FeatureData

export const FeatureItem = ({ path, title, blank }: Props) => {
  return (
    <li className='bg-white border-r-[1px] border-denim px-4 py-2 relative w-[288px] xl:h-[128px] h-[80px] flex items-center xl:mt-[-164px] mt-[-104px]'>
      <Link href={path}>
        <a className='text-denim flex items-center xxl:text-[22px] xl:text-[18px] xxl:leading-[30px]' target={blank ? '_blank' : undefined}>
          <div className='min-w-[33px]'>
            <MenuBookIcon />
          </div>
          <span className='ml-2'>
            <FormattedMessage id={title} />
          </span>
        </a>
      </Link>
    </li>
  )
}
