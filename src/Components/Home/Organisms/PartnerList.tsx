import Link from 'next/link'

const arr = [1, 2, 3, 4, 5, 6]

export const HomePartnerList = () => {
  return (
    <section className='xl:pt-[64px] xl:pb-[74px] pt-[36px] pb-[48px]'>
      <div className='container mx-auto px-2'>
        <div className='flex flex-wrap mx-[-16px] justify-center'>
          {arr.map((item, idx) => (
            <Link href='/' key={idx}>
              <a target='_blank' className='p-3 inline-block'>
                <img className='w-auto h-[44px]' src={`/images/parther_${idx + 1}.jpeg`} alt={`parther_${idx + 1}`} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
