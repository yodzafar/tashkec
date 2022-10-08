import { FeatureItem } from 'Components/Home/Molecules'
import { FeatureData } from 'Components/Home/types'

const features: FeatureData[] = [
  { title: 'korean_language_courses', path: '/', blank: false },
  { title: 'knowledge_test_korean_language', path: '/', blank: false },
  { title: 'culture_classroom', path: '/', blank: false },
]

export const FeatureList = () => {
  return (
    <ul className='justify-center flex list-none'>
      {features.map((item, idx) => (
        <FeatureItem key={idx} {...item} />
      ))}
    </ul>
  )
}
