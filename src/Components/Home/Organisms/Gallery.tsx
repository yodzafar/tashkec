import { SectionHeading } from 'Components/UI/SectionHeading'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { HomeGalleryItem } from '../Molecules'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { useAppSelector } from 'hooks'
import { getTitle } from 'utils/common'

export const HomeGallery = () => {
  const { list } = useAppSelector(state => state.gallery)
  const { t } = useTranslation()
  const { locale } = useRouter()
  const galleryHeadingStyle = useMemo((): string => {
    switch (locale) {
      case 'kr':
        return 'leading-[54px] text-[36px]'
      default:
        return 'leading-8 text-[24px]'
    }
  }, [locale])

  return (
    <section className='home-gallery-section sm:pb-[57px] pb-[36px]'>
      <div className='container mx-auto'>
        <SectionHeading>Gallery</SectionHeading>
        <div className='lg:flex justify-between hidden mb-4'>
          <h5 className={cn('font-semibold', galleryHeadingStyle)}>
            {t('gallery')}
          </h5>
          <h5 className={cn('font-semibold', galleryHeadingStyle)}>
            {t('view_more')}
          </h5>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 sm:gap-5'>
          {
            list.length > 0
              ? (
                <div>
                  <HomeGalleryItem
                    title={getTitle(locale, {
                      titleKr: list[0].titleKr,
                      titleRu: list[0].titleRu,
                      titleUz: list[0].titleUz,
                    })}
                    id={list[0].id}
                    imageUrl={list[0].mainPhotoUrl}
                  />
                </div>
              )
              : null
          }
          {
            list.length > 1
              ? (
                <div className='grid auto-rows-max gap-4'>
                  {
                    list.map(({ titleKr, titleRu, titleUz, ...item }) => (
                      <HomeGalleryItem
                        id={item.id}
                        key={item.id}
                        title={getTitle(locale, { titleKr, titleRu, titleUz })}
                      />
                    ))
                  }
                </div>
              )
              : null
          }

        </div>
      </div>
    </section>
  )
}
