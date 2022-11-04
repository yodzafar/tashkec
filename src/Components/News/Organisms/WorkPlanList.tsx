import useTranslation from 'next-translate/useTranslation'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'
import { IWorkPlan } from 'entities/about'
import { getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Link from 'next/link'

type Props = {
  title: string,
  onShowMore?: () => void
  list: IWorkPlan[],
  className?: string,
}

export const WorkPlanList = ({ title, onShowMore, list, className }: Props) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <div className={className}>
      <div className='flex justify-between items-center mb-5'>
        <h4 className='font-semibold text-2xl leading-[36px] text-mine-shaft'>{t(title)}</h4>
        {
          onShowMore && (
            <button
              className='bg-bright-grey text-white font-medium px-3 py-[8px] text-sm leading-[21px] flex items-center'
              onClick={onShowMore}
            >
              <span>{t('all')}</span>
              <ArrowForwardIcon className='w-[20px] h-[20px] ml-[8px]' />
            </button>
          )
        }
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
        {
          list.map(({ titleUz, titleKr, titleRu, id }) => (
            <Fragment key={id}>
              {
                onShowMore
                  ? (
                    <Link href={`/news/schedule-events/${id}`} locale={locale}>
                      <a
                        className='schedule-item h-[270px] bg-bright-grey text-white flex flex-col justify-center items-center px-3 text-center inline-block'>
                        {getTitle(locale, { titleUz, titleKr, titleRu })}
                      </a>
                    </Link>
                  )
                  : (
                    <Link href={`/news/schedule-events/${id}`} locale={locale}>
                      <a className='bg-bright-grey text-white flex items-center p-4 justify-between inline-block'>
                        <span>{getTitle(locale, { titleUz, titleKr, titleRu })}</span>
                        <ArrowForwardIcon />
                      </a>
                    </Link>
                  )
              }
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}