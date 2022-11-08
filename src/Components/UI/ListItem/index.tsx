import { getContent, getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import moment from 'moment'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'
import Link from 'next/link'
import { IFullContent } from 'entities/common'

type Props = IFullContent & {
  path: string
  publishedDate?: string
}

export const ListItem = (
  {
    titleKr,
    titleRu,
    titleUz,
    contentKr,
    contentUz,
    contentRu,
    publishedDate,
    path,
  }: Props) => {
  const { locale } = useRouter()
  return (
    <Link href={path}>
      <a className='block text-bright-grey lg:pb-[56px] lg:mb-[56px] pb-4 mb-4 border-b-[1px] border-light-grey'>
        <h6 className='font-semibold leading-6 mb-4'>{getTitle(locale, { titleUz, titleRu, titleKr })}</h6>
        <div className='mb-4 flex items-center'>
          <p className='font-medium text-sm leading-[21px] flex-grow'>
          <span className='text-overflow'>{getContent(locale, {
            contentRu,
            contentUz,
            contentKr,
          }).replace(/(&nbsp;|<([^>]+)>)/ig, '')}
          </span>
          </p>
          <ArrowForwardIcon />
        </div>
        {
          publishedDate && (
            <p className='text-[18px] leading-[21px]'>
              {moment(publishedDate).utc().format('YYYY-MM-DD')}
            </p>
          )
        }
      </a>
    </Link>
  )
}