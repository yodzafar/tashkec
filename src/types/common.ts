export enum LayoutMediaEnum {
  Slider = 'Slider',
  Greeting = 'Greeting',
  CenterStructure = 'CenterStructure',
  OurHistory = 'OurHistory',
  WorkPlan = 'WorkPlan',
  WorkPlanMonth = 'WorkPlanMonth',
  WorkPlanYear = 'WorkPlanYear',
  WorkPlanInner = 'WorkPlanInner',
  OurAddress = 'OurAddress',
  CenterNews = 'CenterNews',
  NewsInner = 'NewsInner',
  CenterEvents = 'CenterEvents',
  EventInner = 'EventInner',
  StudyInKorea = 'StudyInKorea',
  EducationInner = 'EducationInner',
  TopikMaterials = 'TopikMaterials',
  EducationMaterial = 'EducationMaterial',
  TopikInner = 'TopikInner',
  EducationMaterialInner = 'EducationMaterialInner',
  Material = 'Material',
  MaterialInner = 'MaterialInner',
  Scheduler = 'Scheduler',
  University = 'University',
  UniversityInner = 'UniversityInner',
  Faq = 'Faq',
  Gallery = 'Gallery',
}

export type Navigation = {
  title: string
  path: string
  children?: Navigation[]
  noParent?: boolean
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
