export enum LayoutMediaEnum {
  Slider = 'Slider',
  Greeting = 'Greeting',
  CenterSturcture = 'CenterSturcture',
  History = 'History',
  WorkPlan = 'WorkPlan',
  WorkPlanMonth = 'WorkPlanMonth',
  WorkPlanYear = 'WorkPlanYear',
  WorkPlanInner = 'WorkPlanInner',
  ContactInfo = 'ContactInfo',
  News = 'News',
  NewsInner = 'NewsInner',
  Events = 'Events',
  EventInner = 'EventInner',
  Topik = 'Topik',
  TopikInner = 'TopikInner',
  Material = 'Material',
  MaterialInner = 'MaterialInner',
  Schduler = 'Schduler',
  Education = 'Education',
  EducationInner = 'EducationInner',
  Faq = 'Faq',
  Gallery = 'Gallery',
}

export type Navigation = {
  title: string
  path: string
  children?: Navigation[]
}

export type Social = {
  type: string
  path: string
  icon: () => JSX.Element
}

export type LangType = 'kr' | 'uz' | 'ru' | string

export type LangData = {
  label: string
  id: LangType
}

export type Lang = {
  [key in LangType]: LangData[]
}
