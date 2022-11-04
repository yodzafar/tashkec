import { IAttachment } from 'entities/attachment'
import { IFullContent, ITitle } from 'entities/common'

export interface IGreeting extends IFullContent {
}

export interface ICenterStructure extends IFullContent {

}

export interface ICenterHistory extends ITitle{
  publishedDate: string
}

export enum WorkPlanTypeEnum {
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export interface IWorkPlan extends IFullContent  {
  workPlanTypeEnum: WorkPlanTypeEnum
}

export interface IContact extends IFullContent {
  phoneNumber: string
  contactEmail: string
}

export interface ITimeTable extends IFullContent{
  publishedDate: string
}

export interface IPartner extends ITitle{
  attachmentId?: number
  webUrl: string,
  youtubeUrl: string,
  attachment: IAttachment
}
