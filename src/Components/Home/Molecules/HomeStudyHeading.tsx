import { ArrowLongLeftIcon, ArrowLongRightIcon } from 'Components/Icons/Arrows'
import { PauseCircleFilledIcon, PlayCircleFilledIcon } from 'Components/Icons/Media'
import useTranslation from 'next-translate/useTranslation'
import { useAppSelector } from 'hooks'

type Props = {
  isPause: boolean
  goToNext: () => void
  goToPrev: () => void
  play: () => void
}

export const HomeStudyHeading = ({ isPause, goToNext, goToPrev, play }: Props) => {
  const { list } = useAppSelector(state => state.news)
  const { t } = useTranslation()
  return (
    <div className='flex items-center sm:mb-[20px] mb-[8px] justify-between h-[51px]'>
      <h3 className='font-bold text-[28px] leading-[42px] mr-[44px]'>
        {t('notice')}
      </h3>
      {
        list.length > 1
          ? (
            <div className='sm:flex hidden items-center text-bright-grey'>
              <button onClick={goToPrev}>
                <ArrowLongLeftIcon />
              </button>
              <button onClick={play} className='mx-3'>
                {isPause ? <PlayCircleFilledIcon /> : <PauseCircleFilledIcon />}
              </button>
              <button onClick={goToNext}>
                <ArrowLongRightIcon />
              </button>
            </div>
          )
          : null
      }

    </div>
  )
}
