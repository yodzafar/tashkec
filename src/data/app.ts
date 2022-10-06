import { FacebookCircleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'Components/Icons/Social'
import { Lang, Navigation, Social } from 'types/common'

export const social: Social[] = [
  { type: 'facebook', path: '', icon: FacebookIcon },
  { type: 'instagram', path: '', icon: InstagramIcon },
  { type: 'youtube', path: '', icon: YoutubeIcon },
]

export const footerNav1: Navigation[] = [
  { title: 'education_center', path: '' },
  { title: 'news', path: 'news' },
  { title: 'korean_language_course', path: '' },
]

export const footerNav2: Navigation[] = [
  { title: 'study_in_korea', path: '' },
  { title: 'archives', path: '' },
  { title: 'frequently_asked_questions', path: 'faq' },
]

export const footerSocial: Social[] = [
  { type: 'twitter', path: '', icon: TwitterIcon },
  { type: 'linkedin', path: '', icon: LinkedinIcon },
  { type: 'facebook', path: '', icon: FacebookCircleIcon },
]

export const navigation: Navigation[] = [
  {
    title: 'about_the_institute',
    path: 'about',
    children: [
      { title: 'greeting', path: 'greeting' },
      { title: 'center_structure', path: 'center-structure' },
      { title: 'our_history', path: 'our-history' },
      { title: 'work_plan', path: 'work-plan' },
      { title: 'our_address', path: 'contact-info' },
    ],
  },
  {
    title: 'news',
    path: 'news',
  },
  {
    title: 'education_materials',
    path: 'education_materials',
  },
  {
    title: 'sceduler',
    path: 'sceduler',
  },
  {
    title: 'institution',
    path: 'institution',
  },
  {
    title: 'faq',
    path: 'faq',
  },
  {
    title: 'gallery',
    path: 'gallery',
  },
]

export const lang: Lang = {
  uz: [
    { label: "O'zbek", id: 'uz' },
    { label: 'Rus', id: 'ru' },
    { label: 'Koreys', id: 'kr' },
  ],
  ru: [
    { label: 'Узбекский', id: 'uz' },
    { label: 'Русский', id: 'ru' },
    { label: 'Корейский', id: 'kr' },
  ],
  kr: [
    { label: '우즈벡어', id: 'uz' },
    { label: '러시아어', id: 'ru' },
    { label: '한국어', id: 'kr' },
  ],
}
