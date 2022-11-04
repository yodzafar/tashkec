import cn from 'classnames'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import Link from 'next/link'
import { Navigation } from 'types/common'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

type Props = Navigation

export const DesktopManuItem = ({ children, path, title, blank }: Props) => {
  const { t } = useTranslation()
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
            {t(title)}
          </span>
          <ChevronDownIcon />
        </span>
      ) : (
        <>
          {blank ? (
            <a
              target='_blank'
              href={path}
              className={cn('font-bold hover:text-grape', menuTitleClassName, {
                'text-grape': pathname === `/${path}`,
              })} rel='noreferrer'>
              <span>
                {t(title)}
              </span>
            </a>
          ) : (
            <Link href={`/${path}`} locale={locale}>
              <a
                className={cn('font-bold hover:text-grape', menuTitleClassName, {
                  'text-grape': pathname === `/${path}`,
                })}>
                <span>
                  {t(title)}
                </span>
              </a>
            </Link>
          )}
        </>
      )}

      {children && (
        <ul className='list-none dropdown left-[0px] bg-white shadow py-1 px-2'>
          {children.map((child, x) => {
            const link = child.noParent ? `/${child.path}` : `/${path}/${child.path}`
            return (
              <li key={x} className='border-b-[1px] border-[#e9e9e9] last:border-b-0'>
                {child.blank ? (
                  <a
                    href={child.path}
                    target='_blank'
                    className={cn('inline-block hover:text-grape whitespace-nowrap font-bold text-sm py-[12px]', {
                      active: pathname === link,
                    })} rel='noreferrer'>
                    <span>
                      {t(child.title)}
                    </span>
                  </a>
                ) : (
                  <Link locale={locale} href={link}>
                    <a
                      className={cn('inline-block hover:text-grape whitespace-nowrap font-bold text-sm py-[12px]', {
                        active: pathname === link,
                      })}>
                      <span>
                        {t(child.title)}
                      </span>
                    </a>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
