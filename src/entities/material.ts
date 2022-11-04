import { IFullContent, ITitle } from 'entities/common'

export interface ITopikMaterial extends ITitle {

}

export interface ITopikLevel extends ITitle {
  materialsOfTopic: ITopikMaterial
}

export interface IStudyMaterial extends IFullContent {

}