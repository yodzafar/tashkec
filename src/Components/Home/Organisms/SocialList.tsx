import { FormattedMessage } from 'react-intl'
import { homeSocial } from 'data/app'
import { HomeSocialItem } from 'Components/Home/Molecules'

export const HomeSocialList = () => {
  return (
    <section className='home-social-section xl:pt-[57px] xl:pb-[64px] py-[36px] bg-azure'>
      <div className='container mx-auto px-2'>
        <h2 className='text-2xl mb-4 leading-[36px] text-white font-semibold text-center'>
          <FormattedMessage id='recent_post_from_social_networks' />
        </h2>
        <div className='grid grid-cols-3 gap-4'>
          {homeSocial.map((item, idx) => (
            <HomeSocialItem className={`home-social-${item.type.toLowerCase()}`} {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
