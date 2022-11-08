import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListState, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IWorkPlan, WorkPlanTypeEnum } from 'entities/about'

type initialState = {
  month: ListState<IWorkPlan>,
  year: ListState<IWorkPlan>
  detail: IWorkPlan | null
}

const slice = createSlice({
  name: 'workPlan',
  initialState: {
    detail: null,
    year: {
      isLoading: false,
      list: [],
      count: 0,
    },
    month: {
      isLoading: false,
      list: [],
      count: 0,
    }
  } as initialState,
  reducers: {
    monthLoading: (state, { payload }) => {
      state.month.isLoading = payload
    },
    monthFetch: (state, { payload }: Payload<IWorkPlan[]>) => {
      state.month.list = payload.data
      state.month.count = getListCountFromHeader(payload.headers)
    },
    yearLoading: (state, { payload }) => {
      state.year.isLoading = payload
    },
    yearFetch: (state, { payload }: Payload<IWorkPlan[]>) => {
      state.year.list = payload.data
      state.year.count = getListCountFromHeader(payload.headers)
    },
    fetchDetail: (state, {payload}: Payload<IWorkPlan>) => {
      state.detail = payload.data
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.workPlan }),
  },
})

export const workPlanReducer = slice.reducer
const { monthLoading, monthFetch, yearLoading, yearFetch, fetchDetail } = slice.actions

export const fetchMonthWorkPlans = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(monthLoading(true))
    const res = await httpClient.get<IWorkPlan[]>('/work-plans/time-type', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        timeType: WorkPlanTypeEnum.MONTH
      },
    })
    dispatch(monthFetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(monthLoading(false))
  }
}

export const fetchYearWorkPlans = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(yearLoading(true))
    const res = await httpClient.get<IWorkPlan[]>('/work-plans/time-type', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        timeType: WorkPlanTypeEnum.YEAR
      },
    })
    dispatch(yearFetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(yearLoading(false))
  }
}

export const fetchWorkPlanDetail = (id: string):AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<IWorkPlan>(`/work-plans/${id}`)
    dispatch(fetchDetail(res))
  }catch (e) {
    console.log(e)
  }
}

