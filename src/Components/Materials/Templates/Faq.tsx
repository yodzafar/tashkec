import { useAppSelector } from 'hooks'
import { getTitle } from 'utils/common'
import { useRouter } from 'next/router'
import { ArrowRightIcon } from 'Components/Icons/Arrows'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'Components/UI/Button'
import Link from 'next/link'

export const Faq = () => {
  const {t} = useTranslation()
  const {locale} = useRouter()
  const {list} = useAppSelector(state => state.faq)

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-2xl font-semibold leading-6'>{t('faq')}</h2>
        <Button>
          {t('ask_a_question')}
        </Button>
      </div>
      {
        list.map(({titleRu, titleUz, titleKr, ...item}) => (
          <Link href={`/materials/faq/${item.id}`} key={item.id}>
            <a className='flex items-center justify-between p-4 bg-blue font-medium leading-8 mb-5 text-bright-grey'>
              <span className='text-overflow'>{getTitle(locale, {titleKr, titleRu, titleUz})}</span>
              <ArrowRightIcon />
            </a>
          </Link>
        ))
      }
    </div>
  )
}