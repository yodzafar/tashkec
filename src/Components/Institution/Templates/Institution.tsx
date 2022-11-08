import useTranslation from 'next-translate/useTranslation'
import { EducationTypeEnum } from 'entities/institution'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { useAppSelector, useUrlParams } from 'hooks'
import { getTitle } from 'utils/common'
import { ArrowForwardIcon } from 'Components/Icons/Arrows'
import Image from 'next/image'

const tabList = [
  EducationTypeEnum.SCHOOL,
  EducationTypeEnum.COLLEGE_AND_LYCEUM,
  EducationTypeEnum.UZBEKISTAN_UNIVERSITY,
  EducationTypeEnum.KOREAN_UNIVERSITY,
]

export const Institution = () => {
  const { locale } = useRouter()
  const { list } = useAppSelector(state => state.education)
  const { t } = useTranslation()
  const queryData = useUrlParams()

  return (
    <div>
      <h2 className='text-2xl leading-[36px] mb-[40px] font-semibold'>{t('edu_text_sentence')}</h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-3'>
        {
          tabList.map((item, idx) => (
            <Link href={`/universities?type=${item}`} key={idx}>
              <a
                className={cn('p-3 leading-6 border-[1px] border-bright-grey block', {
                  'bg-bright-grey text-white': queryData?.type === item,
                  'bg-white text-bright-grey': queryData?.type !== item,
                })}>
                {t(item.toLowerCase())}
              </a>
            </Link>
          ))
        }
      </div>
      <div className='xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4'>
        {
          list.map(({ titleUz, titleRu, titleKr, ...item }) => (
            <Link key={item.id} href={`/universities/${item.id}`}>
              <a>
                <div className='relative h-[250px]'>
                  <Image src='/images/education_static_image.jpg' alt='static' objectFit='cover' layout='fill' />
                </div>
                <div className='bg-bright-grey text-white flex items-center py-3 px-4 justify-between'>
                  <span className='text-overflow'>{getTitle(locale, {titleUz, titleRu, titleKr})}</span>
                  <ArrowForwardIcon />
                </div>
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}