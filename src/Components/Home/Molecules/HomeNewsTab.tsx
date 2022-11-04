import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  show: boolean
  setShow: (value: boolean) => void
}

export const HomeNewsTab = ({ show, setShow }: Props) => {
  const {t} = useTranslation()
  return (
    <div className='flex items-center sm:flex-nowrap flex-wrap sm:mb-[20px] mb-[8px]'>
      <h3 className='font-bold text-[28px] leading-[42px] sm:mr-[44px] mr-0 sm:w-[unset] sm:mb-0 mb-[8px] w-[100%]'>Notice</h3>
      <div
        className={cn('sm:text-[18px] text-base leading-[27px] text-center py-2 sm:w-[unset] w-[50%] px-3 sm:px-[27px] cursor-pointer', {
          'bg-error text-white': !show,
          'text-bright-grey': show,
        })}
        onClick={() => setShow(false)}>
        {t('center_events')}
      </div>
      <div
        className={cn('sm:text-[18px] text-base leading-[27px] text-center py-2 sm:w-[unset] w-[50%] px-3 sm:px-[27px] cursor-pointer', {
          'bg-error text-white': show,
          'text-bright-grey': !show,
        })}
        onClick={() => setShow(true)}>
        {t('study_in_korea')}
      </div>
    </div>
  )
}
