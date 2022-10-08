import { LogoIcon } from 'Components/Icons/Logo'
import { footerNav1, footerNav2, footerSocial } from 'data/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

export const Footer = () => {
  const { locale } = useRouter()
  return (
    <footer className='bg-catskill-white mt-auto xl:pt-[90px] pt-[48px] pb-[40px]'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-6 xl:mb-[50px] mb-[36px]'>
          <Link href='/'>
            <a className='flex col-span-2'>
              <LogoIcon />
              <span className='ml-4 inline-block max-w-[190px] text-pickled-bluewood xl:text-[18px] text-base font-semibold mt-[-5px]'>
                <FormattedMessage id='logo_text' />
              </span>
            </a>
          </Link>
          <ul className='col-span-1 list-none'>
            {footerNav1.map((item, idx) => (
              <li key={idx + 1} className='mb-[14px]'>
                <Link href={item.path}>
                  <a className='inline-block font-manrope leading-[22px] text-grey hover:text-azure'>
                    <FormattedMessage id={item.title} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='col-span-1 list-none'>
            {footerNav2.map((item, idx) => (
              <li key={idx + 1} className='mb-[14px]'>
                <Link href={item.path}>
                  <a className='inline-block font-manrope leading-[22px] text-grey hover:text-azure'>
                    <FormattedMessage id={item.title} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='col-span-2 text-grey leading-[21px] text-sm'>
            <p className='mb-4'>
              <FormattedMessage id='footer_address' />
            </p>
            <p>
              <FormattedMessage id='footer_contact' />
            </p>
          </div>
        </div>
        <div className='grid grid-cols-6'>
          <div className='text-gull-grey col-span-4'>{new Date().getFullYear()}</div>
          <div className='col-span-2 flex'>
            {footerSocial.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link href={item.path} key={idx} locale={locale}>
                  <a target='_blank' className='mr-3 inline-block text-gull-grey'>
                    <Icon />
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
