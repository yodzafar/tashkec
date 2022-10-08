import { ChevronDownIcon } from 'Components/Icons/Arrows'
import { LangIcon } from 'Components/Icons/Lang'
import { PhoneIcon } from 'Components/Icons/Phone'
import { lang, social } from 'data/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useMemo } from 'react'
import { LangData } from 'types/common'

export const Header = () => {
  const { locale, pathname } = useRouter()

  const langData = useMemo((): LangData[] => {
    const tmp: LangData[] = []
    if (locale) {
      return lang[locale]
    }
    return tmp
  }, [locale])

  const activeLang = useMemo((): LangData | null => {
    return langData.find(item => item.id === locale) || null
  }, [langData, locale])

  return (
    <header className='h-[74px] bg-azure flex items-center text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center'>
          <div className='flex items-center font-manrope'>
            <PhoneIcon />
            <div className='ml-2 flex flex-col'>
              <span className='font-medium text-base'>310-437-2766</span>
              <span className='text-sm'>월~금 08:00~17:00, 주말 휴무</span>
            </div>
          </div>
          <div className='ml-auto flex items-center'>
            <ul className='lg:flex hidden list-none border-r-[1px] pt-[5px] pb-[5px] border-white pr-[36px]'>
              {social.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx}>
                    <a
                      href={item.path}
                      target='_blank'
                      className='rounded-[50%] w-4 h-4 flex items-center justify-center ml-[14px] bg-white text-azure'
                      rel='noreferrer'>
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className='pt-[5px] pb-[5px] border-white lg:pl-[36px] pr-2 lg:pl-[0]'>
              팝업 <span className='text-orange'>1</span> 건
            </div>
            <div className='pt-[5px] pb-[5px] border-l-[1px] border-white lg:pl-[36px] pl-2 flex relative dropdown-show'>
              <LangIcon />
              <div className='mr-[8px] ml-[8px]'>{activeLang?.label || ''}</div>
              <ChevronDownIcon />
              <ul className='list-none dropdown right-[0] bg-white shadow py-1 px-2 min-w-[110px]'>
                {langData.map(item => (
                  <Fragment key={item.id}>
                    {locale !== item.id && (
                      <li className='py-[2px]'>
                        <Link href={pathname} locale={item.id}>
                          <a className='font-medium hover:text-azure whitespace-nowrap text-mine-shaft'>{item.label}</a>
                        </Link>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
