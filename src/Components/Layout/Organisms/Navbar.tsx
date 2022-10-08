import { LogoIcon } from 'Components/Icons/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { navigation } from 'data/navigation'
import { DesktopManuItem } from 'Components/Layout/Molecules'
import { BurgerIcon } from 'Components/Icons/Menu'

export const Navbar = () => {
  const { locale } = useRouter()

  return (
    <nav className='bg-white'>
      <div className='container mx-auto px-2'>
        <div className='flex h-[92px] items-center'>
          <Link href='/' locale={locale}>
            <a className='inline-flex items-center font-bold xl:text-base text-sm text-azure'>
              <LogoIcon />
              <span className='inline-block ml-3 w-[250px] lg:max-w-[170px]'>
                <FormattedMessage id='logo_text' />
              </span>
            </a>
          </Link>
          <div className='ml-auto'>
            <ul className='lg:flex hidden items-center'>
              {navigation.map((item, idx) => (
                <DesktopManuItem key={idx} {...item} />
              ))}
            </ul>
            <div className='lg:hidden text-azure'>
              <BurgerIcon />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
