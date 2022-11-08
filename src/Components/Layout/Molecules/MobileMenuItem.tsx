import { Navigation } from 'types/common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

type Props = Navigation & {
  isSub?: boolean
  onClick: () => void
}

export const MobileMenuItem = ({ path, title, blank, children, isSub, onClick }: Props) => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  return (
    <li className={cn('flex flex-col text-white', { 'mb-5': !isSub })}>
      {
        !isSub && <div className='px-3 text-[#6A6D82] font-semibold text-[12px]'>{t(title)}</div>
      }

      {
        children ?
          (
            <>
              {
                <ul className='flex flex-col'>
                  {
                    children.map((item, idx) => (
                      <MobileMenuItem isSub key={idx + 1} {...item} path={`${path}/${item.path}`} onClick={onClick} />
                    ))
                  }
                </ul>
              }
            </>
          )
          : (
            <>
              {blank ? (
                <a
                  target='_blank'
                  href={path}
                  rel='noreferrer'
                  onClick={onClick}
                  className='p-3 font-semibold border-b-[1px] border-[#6A6D82] text-sm block'
                >
                  {t(title)}
                </a>
              ) : (
                <Link href={path} locale={locale}>
                  <a className='p-3 font-semibold border-b-[1px] border-[#6A6D82] text-sm block' onClick={onClick}>
                    {t(title)}
                  </a>
                </Link>
              )}
            </>
          )
      }
    </li>
  )
}