import { ReactNode, useCallback } from 'react'
import { Navigation } from 'types/common'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import { useRouter } from 'next/router'
import cn from 'classnames'

type Props = {
  children: ReactNode
  navigation: Navigation[]
  parent: string
  parentTitle: string
}
export const ContentLayout = ({ children, navigation, parent, parentTitle }: Props) => {
  const { pathname } = useRouter()

  const getActive = useCallback(
    (item: Navigation) => {
      return pathname.indexOf(item.path) !== -1
    },
    [pathname],
  )

  return (
    <div className='flex items-stretch border-t-[1px] border-mercury grow'>
      <div className='bg-alabaster pl-[18px] pr-4 pb-4 pt-4 w-[180px]'>
        <div className='flex justify-end font-medium mb-4 text-azure items-center inline-block'>
          <span className='inline-block mr-[10px]'>
            <FormattedMessage id={parentTitle} />
          </span>
          <ChevronDownIcon />
        </div>
        <ul className='list-none'>
          {navigation.map((item, idx) => (
            <li key={idx} className='mb-4'>
              <Link href={item.noParent ? `/${item.path}` : `/${parent}/${item.path}`}>
                <a className={cn('text-sm font-medium', { 'text-azure active': getActive(item) })}>
                  <FormattedMessage id={item.title} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='grow'>
        <div className='container mx-auto px-2 2xl:max-w-[1200px]'>{children}</div>
      </div>
    </div>
  )
}
