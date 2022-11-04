import { ReactNode, useCallback } from 'react'
import { Navigation } from 'types/common'
import Link from 'next/link'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import { useRouter } from 'next/router'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  children: ReactNode
  navigation: Navigation[]
  parent: string
  parentTitle: string
}
export const ContentLayout = ({ children, navigation, parent, parentTitle }: Props) => {
  const { pathname } = useRouter()
  const { t } = useTranslation()

  const getActive = useCallback(
    (item: Navigation) => {
      return pathname.indexOf(item.path) !== -1
    },
    [pathname],
  )

  return (
    <div className='flex items-stretch border-t-[1px] border-mercury grow min-h-[600px]'>
      <div className='bg-alabaster pl-[18px] pr-4 pb-4 pt-4 w-[180px] sm:block hidden'>
        <div className='flex justify-end font-medium mb-4 text-bright-grey items-center'>
          <span className='inline-block mr-[10px]'>
            {t(parentTitle)}
          </span>
          {navigation.length > 0 && <ChevronDownIcon />}
        </div>
        <ul className='list-none'>
          {navigation.map((item, idx) => (
            <li key={idx} className='mb-4'>
              {item.blank ? (
                <a href={item.path} className='text-sm font-medium'>
                  {t(item.title)}
                </a>
              ) : (
                <Link href={item.noParent ? `/${item.path}` : `/${parent}/${item.path}`}>
                  <a className={cn('text-sm', { 'text-bright-grey font-semibold active': getActive(item) })}>
                    {t(item.title)}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='grow py-4'>
        <div className='container mx-auto px-4 2xl:max-w-[1200px]'>{children}</div>
      </div>
    </div>
  )
}
