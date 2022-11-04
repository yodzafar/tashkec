import { SectionHeading } from 'Components/UI/SectionHeading'
import { useCallback, useState } from 'react'
import { HomeNewsItem, HomeNewsTab } from '../Molecules'
import { HomeNotification } from 'Components/Home/Organisms/Notification'
import { useAppSelector } from 'hooks'
import { useRouter } from 'next/router'
import { getTitle } from 'utils/common'
import { IStudyInKorea, StudyTypeEnum } from 'entities/news'

export const HomeNotice = () => {
  const { locale } = useRouter()
  const [show, setShow] = useState<boolean>(false)
  const { list: events } = useAppSelector(state => state.events)
  const { list: studies } = useAppSelector(state => state.study)

  const getStudyPath = useCallback((item: IStudyInKorea): string => {
    let s = ''
    switch (item.studyTypeEnum) {
      case StudyTypeEnum.ASSOCIATION_GKS:
        s = 'gks-program'
        break
      case StudyTypeEnum.NEWS_OF_STUDY:
        s = 'news'
        break
      case StudyTypeEnum.PROGRAM_FOR_KOR:
        s = 'programs-for-compatriots'
        break
      case StudyTypeEnum.PROGRAM_OF_GKS:
        s = 'gks-program'
        break
    }
    return `/study-in-korea/${s}/${item.id}`
  }, [])

  return (
    <section className='border-t-[5px] lg:pt-0 border-bright-grey home-notice-section pb-[58px]'>
      <div className='container mx-auto px-4'>
        <SectionHeading className='hidden lg:flex'>Notice</SectionHeading>
        <div className='mt-3 grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-5'>
          <div>
            <HomeNewsTab show={show} setShow={setShow} />
            <div className='bg-white h-[403px] max-h-[403px] sm:p-5 p-3 overflow-y-auto overflow-x-hidden'>
              {!show && events.map(({ titleUz, titleRu, titleKr, ...item }, idx) => (
                <HomeNewsItem
                  key={idx}
                  title={getTitle(locale, { titleUz, titleRu, titleKr })}
                  path={`/news/center-events/${item.id}`}
                  date={item.publishedDate}
                />
              ))}
              {show && studies.map((item, idx) => {
                const { titleUz, titleKr, titleRu } = item
                return (
                  <HomeNewsItem
                    key={idx}
                    title={getTitle(locale, { titleUz, titleRu, titleKr })}
                    path={getStudyPath(item)}
                  />
                )
              })}
            </div>
          </div>
          <div><HomeNotification /></div>
        </div>
      </div>
    </section>
  )
}
