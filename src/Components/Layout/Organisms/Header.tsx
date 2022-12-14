import cn from 'classnames'
import { ChevronDownIcon } from 'Components/Icons/Arrows'
import { LangIcon } from 'Components/Icons/Lang'
import { PhoneIcon } from 'Components/Icons/Phone'
import { lang, social } from 'data/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { LangData } from 'types/common'
import { useUrlParams } from 'hooks'

export const Header = () => {
  const { locale, asPath } = useRouter()
  const urlParams = useUrlParams()

  const query = useMemo((): string | null => {
    const tmp: string[] = []

    for (const key in urlParams) {
      tmp.push(`${key}=${urlParams[key]}`)
    }

    return tmp.length > 0 ? tmp.join('&') : null
  }, [urlParams])

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
    <header className='h-[74px] bg-bright-grey flex items-center text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center'>
          <div className='flex items-center font-manrope'>
            <div className='sm:block hidden'>
              <PhoneIcon />
            </div>
            <div className='sm:ml-2 ml-0 flex flex-col'>
              <span className='font-medium sm:text-base text-sm'>310-437-2766</span>
              <span className='sm:text-sm text-[12px]'>월~금 08:00~17:00, 주말 휴무</span>
            </div>
          </div>
          <div className='ml-auto flex items-center'>
            <ul className='md:flex hidden list-none border-r-[1px] pt-[5px] pb-[5px] border-white lg:pr-[36px] md:pr-4'>
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
            <div
              className='pt-[5px] pb-[5px] border-white hidden sm:block lg:pl-[36px] md:pl-4 md:pr-4 pr-2 pl-[0] lg:pr-[36px]'>
              팝업 <span className='text-orange'>1</span> 건
            </div>
            <div
              className='pt-[5px] pb-[5px] sm:border-l-[1px] border-l-0 border-white md:pl-4 lg:pl-[36px] pl-2 flex relative dropdown-show'>
              <LangIcon />
              <div className='mr-[8px] ml-[8px] sm:text-base text-sm'>{activeLang?.label || ''}</div>
              <div className='mt-[2px]'>
                <ChevronDownIcon />
              </div>
              <ul className='list-none dropdown right-[0] bg-white shadow py-1 px-2 min-w-[110px]'>
                {langData.map(item => (
                  <li className='border-b-[1px] border-[#e9e9e9] last:border-b-0' key={item.id}>
                    <Link href={`${asPath}${query ? `?${query}` : ''}`} locale={item.id}>
                      <a
                        className={cn('inline-block hover:text-azure whitespace-nowrap font-medium text-sm py-[12px]', {
                          'text-bright-grey': activeLang?.id === item.id,
                          'text-manatee': activeLang?.id !== item.id,
                        })}>
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
