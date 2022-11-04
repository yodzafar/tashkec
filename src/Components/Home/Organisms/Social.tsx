import { homeSocial } from 'data/app'
import { HomeSocialItem } from 'Components/Home/Molecules'
import useTranslation from 'next-translate/useTranslation'

export const HomeSocial = () => {
  const {t} = useTranslation()
  return (
    <section className='home-social-section py-5 bg-azure'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl mb-4 leading-[36px] text-white font-semibold text-center'>
          {t('recent_post_from_social_networks')}
        </h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-0 px-6'>
          {homeSocial.map((item, idx) => (
            <HomeSocialItem className={`home-social-${item.type.toLowerCase()}`} {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
