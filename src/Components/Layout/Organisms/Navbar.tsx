import cn from 'classnames'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import { LogoIcon } from 'Components/Icons/Logo'
import { navigation } from 'data/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

export const Navbar = () => {
  const { pathname, locale } = useRouter()

  return (
    <nav className='bg-white'>
      <div className='container mx-auto'>
        <div className='flex h-[92px] items-center'>
          <Link href='/' locale={locale}>
            <a className='inline-flex items-center font-bold text-base text-blue'>
              <LogoIcon />
              <span className='inline-block ml-3 max-w-[170px]'>
                <FormattedMessage id='logo_text' />
              </span>
            </a>
          </Link>
          <div className='ml-auto'>
            <ul className='flex items-center'>
              {navigation.map((item, idx) => (
                <li key={idx + 1} className={cn('ml-[30px] relative py-1', { 'dropdown-show': !!item.children })}>
                  {item.children ? (
                    <span className='font-bold text-[20px] leading-[30px] inline-flex items-center'>
                      <span className='mr-1'>
                        <FormattedMessage id={item.title} />
                      </span>
                      <ChevronDownIcon />
                    </span>
                  ) : (
                    <Link href={`/${item.path}`} locale={locale}>
                      <a className={cn(`font-bold text-[20px] leading-[30px] hover:text-blue`, { active: pathname === item.path })}>
                        <span>
                          <FormattedMessage id={item.title} />
                        </span>
                      </a>
                    </Link>
                  )}

                  {item.children && (
                    <ul className='list-none dropdown left-[0px] bg-white shadow p-2'>
                      {item.children.map((child, x) => (
                        <li key={x} className='py-[2px]'>
                          <Link href={`/${item.path}/${child.path}`} locale={locale}>
                            <a className={cn(`font-medium hover:text-blue whitespace-nowrap`, { active: pathname === item.path })}>
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
