import { BuildinLineIcon, CerificateIcon, UserPlusIcon } from 'Components/Icons/Tutorial'
import { SectionHeading } from 'Components/UI/SectionHeading'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

const arr = [
  {
    id: 1,
    icon: <BuildinLineIcon />,
    ru: (
      <>
        <span className='text-[22px]'>92</span> года <br /> Год основания
      </>
    ),
    uz: <></>,
    kr: <></>,
  },
  {
    id: 2,
    icon: <UserPlusIcon />,
    ru: (
      <>
        более <span className='text-[22px]'>10</span> миллионов <br /> человек
      </>
    ),
    uz: <></>,
    kr: <></>,
  },
  {
    id: 3,
    icon: <CerificateIcon />,
    ru: (
      <>
        <span className='text-[22px]'>1+</span> <br /> сертификат <br />
        об окончании
      </>
    ),
    uz: <></>,
    kr: <></>,
  },
]

export const HomeTutorial = () => {
  const { locale } = useRouter()
  const {t} = useTranslation()

  const getTitle = useCallback((item: any) => {
    switch (locale) {
      case 'ru':
        return item.ru
      case 'uz':
        return item.uz
      case 'kr':
        return item.kr
      default:
        return <></>
    }
  }, [locale])

  const infoListItemClassName = useMemo(() => {
    switch (locale) {
      case 'kr':
        return 'sm:text-[22px] text-[13px] sm:leading-[28px] leading-4'
      default:
        return 'sm:text-[18px] text-[13px] sm:leading-6 leading-4'
    }
  }, [locale])

  return (
    <section>
      <div className='bg-tropical-blue font-dm-sans'>
        <div className='container mx-auto px-4 pb-[125px]'>
          <SectionHeading>Information</SectionHeading>
          <div className='border-t-[1px] border-b-[1px] border-[#9EC2EC] sm:py-[53px] pt-6 pb-3 flex justify-center'>
            {arr.map(item => (
              <div className='flex flex-col items-center sm:w-[222px] mx-[20px] text-center font-medium' key={item.id}>
                <div className='mb-[20px] home-information-icon'>{item.icon}</div>
                <p className='sm:text-[22px] text-base sm:leading-[28px] leading-5'>{getTitle(item)}</p>
              </div>
            ))}
          </div>
          <div className='border-b-[1px] border-[#9EC2EC] sm:py-[48px] py-3 flex sm:flex-nowrap flex-wrap justify-center sm:px-0 px-5'>
            <div className='flex flex-col sm:mr-3 sm:mb-0 mb-5'>
              <h6 className='sm:text-2xl text-sm font-medium leading-5 mb-4 text-center'>
                {t('course_guide')}
              </h6>
              <ul className='text-sm max-w-[340px] list-disc list-inside'>
                <li className={infoListItemClassName}>
                  {t('registration_over_13_years_old')}
                </li>
                <li className={infoListItemClassName}>
                  {t('registration_period_sentence')}
                </li>
              </ul>
            </div>
            <div className='flex flex-col sm:ml-3'>
              <h6 className='sm:text-2xl text-sm font-medium leading-5 mb-4 text-center'>
                {t('course_guide')}
              </h6>
              <ul className='text-sm list-disc list-inside'>
                <li className={infoListItemClassName}>
                  {t('student_finished_6_level')}
                </li>
                <li className={infoListItemClassName}>
                  {t('topic_level_higher_level_three')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-[90px] border-t-[1px] border-[rgba(46, 90, 170, 0.5)]'>
        <div className='container mx-auto px-4 home-information-section'></div>
      </div>
    </section>
  )
}
