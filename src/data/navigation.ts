import { Navigation } from 'types/common'

export const aboutNavigation: Navigation[] = [
  { title: 'greeting', path: 'greeting' },
  { title: 'center_structure', path: 'center-structure' },
  { title: 'our_history', path: 'our-history' },
  { title: 'our_address', path: 'contact-info' },
]

export const newsNavigation: Navigation[] = [
  { title: 'center_news', path: 'center-news' },
  { title: 'center_events', path: 'center-events' },
  { title: 'schedule_events', path: 'schedule-events' },
]

export const koreanCourse: Navigation[] = [
  { title: 'registration', path: '', blank: true },
  { title: 'timetable_of_classes_korean_language', path: 'timetable' },
  { title: 'registration_status_for_courses', path: '', blank: true },
]

export const studyInKorea: Navigation[] = [
  { title: 'gks_program', path: 'gks-program' },
  { title: 'association_gks_graduates', path: 'association-gks-graduates' },
  { title: 'news_about_studying_in_korea', path: 'news' },
  { title: 'programs_for_compatriots', path: 'programs-for-compatriots' },
]

export const koreanCulture: Navigation[] = [
  { title: 'creative_mugs', path: 'creative-mugs' },
  { title: 'getting_to_know_the_culture_of_korea', path: 'about' },
]

export const materialNavigation: Navigation[] = [
  { title: 'gallery', path: 'gallery' },
  { title: 'topik_materials', path: 'topik' },
  { title: 'education_materials', path: 'education-materials' },
  { title: 'faq', path: 'faq' },
]

export const navigation: Navigation[] = [
  { title: 'about_the_institute', path: 'about', children: aboutNavigation },
  { title: 'news', path: 'news', children: newsNavigation },
  { title: 'courses', path: 'courses', children: koreanCourse },
  { title: 'study_in_korea', path: 'study-in-korea', children: studyInKorea },
  { title: 'korean_culture', path: 'korean-culture', children: koreanCulture },
  { title: 'institution', path: 'universities' },
  { title: 'materials', path: 'materials', children: materialNavigation },
  { title: 'partners', path: 'partners' },
]
