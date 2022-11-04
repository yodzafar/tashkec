import { Social } from 'types/common'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

type Props = Social

export const HomeLinkItem = ({ type, path, icon: Icon, noRoute }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      {
        noRoute
          ? (
            <Link href={path}>
              <a
                className='flex p-3 duration-75 flex-col justify-center items-center rounded-full hover:text-grape transition-all hover:bg-white bg-grape text-center text-sm text-white sm:w-[140px] lg:h-[140px] w-[120px] h-[120px]'
              >
                <div><Icon /></div>
                <span
                  className='mt-1 inline-block sm:text-sm lg:text-base text-[12px] font-semibold lg:leading-6 sm:leading-5 leading-4'>
                  {t(type)}
                </span>
              </a>
            </Link>
          )
          : (
            <a
              href={path}
              className='flex p-3 duration-75 flex-col justify-center items-center rounded-full hover:text-grape transition-all hover:bg-white bg-grape text-center text-sm text-white sm:w-[140px] lg:h-[140px] w-[120px] h-[120px]'
              rel='noreferrer'
            >
              <div><Icon /></div>
              <span
                className='mt-1 inline-block sm:text-sm lg:text-base text-[12px] font-semibold lg:leading-6 sm:leading-5 leading-4'>
                {t(type)}
              </span>
            </a>
          )
      }
    </>
  )
}
