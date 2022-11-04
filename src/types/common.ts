import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { EducationTypeEnum } from 'entities/institution'
import { StudyTypeEnum } from 'entities/news'
import { KoreanCultureType } from 'entities/culture'
import { WorkPlanTypeEnum } from 'entities/about'

export type Navigation = {
  title: string
  path: string
  children?: Navigation[]
  noParent?: boolean
  blank?: boolean
}

export type Social = {
  type: string
  path: string
  noRoute?: boolean
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

export type ListState<D> = {
  isLoading: boolean
  list: D[]
  count: number
}

export type Payload<D> = PayloadAction<AxiosResponse<D>>

export type ListParams = {
  page?:number,
  size?: number
  educationTypeEnum?: string | EducationTypeEnum
  studyTypeEnum?: string | StudyTypeEnum
  koreanCultureType?: string | KoreanCultureType
  searchValue?: string
  timeType?: string | WorkPlanTypeEnum
}
