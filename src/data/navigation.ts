import { Navigation } from 'types/common'

export const aboutNavigation: Navigation[] = [
  { title: 'greeting', path: 'greeting' },
  { title: 'center_structure', path: 'center-structure' },
  { title: 'our_history', path: 'our-history' },
  { title: 'work_plan', path: 'work-plan' },
  { title: 'our_address', path: 'contact-info' },
]

export const newsNavigation: Navigation[] = [
  { title: 'center_news', path: 'news', noParent: true },
  { title: 'center_events', path: 'events', noParent: true },
  { title: 'study_in_korea', path: 'edu', noParent: true },
]

export const materialNavigation: Navigation[] = [
  { title: 'topik_materials', path: 'topik' },
  { title: 'education_materials', path: 'education-materials' },
]

export const navigation: Navigation[] = [
  {
    title: 'about_the_institute',
    path: 'about',
    children: aboutNavigation,
  },
  {
    title: 'news',
    path: 'news',
    children: newsNavigation,
  },
  {
    title: 'education_materials',
    path: 'materials',
    children: materialNavigation,
  },
  {
    title: 'sceduler',
    path: 'sceduler',
  },
  {
    title: 'institution',
    path: 'universities',
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
