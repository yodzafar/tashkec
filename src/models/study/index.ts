import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IStudyInKorea } from 'entities/news'

type initialState = ListStateWithDetail<IStudyInKorea>

const slice = createSlice({
  name: 'study',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
    detail: null,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<IStudyInKorea[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
    fetchDetail: (state, { payload }: Payload<IStudyInKorea>) => {
      state.detail = payload.data
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.study }),
  },
})

export const studyReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchStudy = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IStudyInKorea[]>('/study-in-koreas', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        ...(params?.studyTypeEnum ? { studyTypeEnum: params.studyTypeEnum } : {}),
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

export const fetchStudyDetail = (id: string): AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<IStudyInKorea>(`/study-in-koreas/${id}`)
    dispatch(fetchDetail(res))
  } catch (e) {
    console.log(e)
  }
}

