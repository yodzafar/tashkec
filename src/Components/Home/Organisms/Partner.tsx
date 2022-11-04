import Link from 'next/link'
import Image from 'next/image'

const arr = [1, 2, 3, 4, 5, 6]

export const HomePartner = () => {
  return (
    <section className='py-[60px]'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center'>
          {arr.map((_, idx) => (
            <div className='p-3' key={idx}>
              <Link href='/' >
                <a target='_blank' className='relative h-[44px] w-[144px] inline-block'>
                  <Image layout='fill' src={`/images/parther_${idx + 1}.jpeg`} objectFit='contain' alt={`parther_${idx + 1}`} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
