import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import {
  attachmentReducer,
  contactsReducer,
  cultureReducer,
  educationReducer,
  eventsReducer,
  faqReducer,
  galleryReducer,
  greetingReducer,
  historyReducer,
  newsReducer,
  partnersReducer,
  sliderReducer,
  structureReducer,
  studyReducer,
  timeTableReducer,
  topikLevelsReducer,
  topikMaterialsReducer,
  workPlanReducer,
} from 'models'

const makeStore = () =>
  configureStore({
    reducer: {
      slider: sliderReducer,
      greeting: greetingReducer,
      structure: structureReducer,
      history: historyReducer,
      contacts: contactsReducer,
      news: newsReducer,
      events: eventsReducer,
      workPlan: workPlanReducer,
      timeTable: timeTableReducer,
      study: studyReducer,
      culture: cultureReducer,
      education: educationReducer,
      gallery: galleryReducer,
      topikMaterials: topikMaterialsReducer,
      topikLevels: topikLevelsReducer,
      faq: faqReducer,
      partners: partnersReducer,
      attachment: attachmentReducer
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore)
