import cn from 'classnames'
import { FormattedMessage } from 'react-intl'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import Link from 'next/link'
import { Navigation } from 'types/common'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

type Props = Navigation

export const DesktopManuItem = ({ children, path, title }: Props) => {
  const { locale, pathname } = useRouter()

  const menuTitleClassName: string = useMemo(() => {
    if (locale === 'ru' || locale === 'uz') {
      return 'xxl:text-[18px] xl:text-base text-[15px] leading-[24px]'
    }

    if (locale === 'kr') {
      return 'xxl:text-[20px] text-[18px] leading-[30px]'
    }
    return ''
  }, [locale])

  return (
    <li className={cn('xl:ml-[30px] ml-2 relative py-1', { 'dropdown-show': !!children })}>
      {children ? (
        <span className={cn('font-bold inline-flex items-center', menuTitleClassName)}>
          <span className='mr-1'>
            <FormattedMessage id={title} />
          </span>
          <ChevronDownIcon />
        </span>
      ) : (
        <Link href={`/${path}`} locale={locale}>
          <a
            className={cn('font-bold hover:text-azure', menuTitleClassName, {
              active: pathname === path,
            })}>
            <span>
              <FormattedMessage id={title} />
            </span>
          </a>
        </Link>
      )}

      {children && (
        <ul className='list-none dropdown left-[0px] bg-white shadow p-2'>
          {children.map((child, x) => (
            <li key={x} className='py-[2px]'>
              <Link locale={locale} href={child.noParent ? `/${child.path}` : `/${path}/${child.path}`}>
                <a className={cn('font-medium hover:text-azure whitespace-nowrap', { active: pathname === path })}>
                  <span>
                    <FormattedMessage id={child.title} />
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
