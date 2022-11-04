import { LogoNewFilled } from 'Components/Icons/Logo'
import { BurgerIcon, CloseIcon } from 'Components/Icons/Menu'
import { DesktopManuItem, MobileMenuItem } from 'Components/Layout/Molecules'
import { navigation } from 'data/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import cn from 'classnames'

export const Navbar = () => {
  const { locale } = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (s: boolean) => {
    setOpen(s)
    const body = document.body
    if (s) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  }

  return (
    <nav className='bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex sm:h-[92px] py-2 items-center'>
          <Link href='/' locale={locale}>
            <a className='inline-flex items-center font-bold xl:text-base text-sm text-azure'>
              <LogoNewFilled className='sm:w-[64px] sm:h-[64px] h-[48px] w-[48px]' />
            </a>
          </Link>
          <div className='ml-auto'>
            <ul className='lg:flex hidden items-center'>
              {navigation.map((item, idx) => (
                <DesktopManuItem key={idx} {...item} />
              ))}
            </ul>
            <ul
              className={cn('lg:hidden mobile-menu block fixed bg-bright-grey top-[146px] pt-3 pb-[64px] left-[0] right-[0] z-30', { open })}>
              {navigation.map((item, idx) => (
                <MobileMenuItem key={idx} {...item} path={`/${item.path}`} />
              ))}
            </ul>
            <div className='lg:hidden text-azure' onClick={() => handleClick(!open)}>
              {
                open ? <CloseIcon /> : <BurgerIcon />
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
