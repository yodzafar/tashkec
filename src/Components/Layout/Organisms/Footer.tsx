import { LogoNewFilled } from 'Components/Icons/Logo'
import { footerNav1, footerNav2, footerSocial } from 'data/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export const Footer = () => {
  const {t} = useTranslation()
  const { locale } = useRouter()
  return (
    <footer className='mt-auto xl:pt-[74px] pt-[48px] pb-[40px] bg-bright-grey text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-6 grid-cols-1 gap-[40px] xl:mb-[50px] mb-[36px]'>
          <Link href='/'>
            <a className='flex col-span-2'>
              <div>
                <LogoNewFilled className='w-[64px] h-[64px]' />
              </div>
              <div className='flex flex-col max-w-[230px] ml-4'>
                <span className='inline-block  xl:text-[18px] text-base font-semibold mb-[6px]'>타슈켄트 한국교육원</span>
                <span className='text-sm leading-[21px]'>
                  {t('embassy_of')}
                </span>
              </div>
            </a>
          </Link>
          <ul className='lg:col-span-1 col-span-2 list-none'>
            {footerNav1.map((item, idx) => (
              <li key={idx + 1} className='mb-[14px]'>
                <Link href={item.path}>
                  <a className='inline-block font-manrope leading-[22px] hover:opacity-[0.7]'>
                    {t(item.title)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='lg:col-span-1 col-span-2 list-none'>
            {footerNav2.map((item, idx) => (
              <li key={idx + 1} className='mb-[14px]'>
                <Link href={item.path}>
                  <a className='inline-block font-manrope leading-[22px] hover:opacity-[0.7]'>
                    {t(item.title)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='col-span-2 leading-[21px] text-sm'>
            <p className='mb-4'>
              {t('footer_address')}
            </p>
            <p>
              {t('footer_contact')}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-6'>
          <div className='col-span-4 hidden lg:block'>{new Date().getFullYear()}</div>
          <div className='col-span-2 flex'>
            {footerSocial.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link href={item.path} key={idx} locale={locale}>
                  <a target='_blank' className='mr-3 inline-block '>
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
