import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { ICulture } from 'entities/culture'

type initialState = ListStateWithDetail<ICulture>

const slice = createSlice({
  name: 'culture',
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
    fetch: (state, { payload }: Payload<ICulture[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },

    fetchDetail: (state, {payload}: Payload<ICulture>) => {
      state.detail = payload.data
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.culture }),
  },
})

export const cultureReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchCulture = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<ICulture[]>('/korean-cultures/type', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        ...(params?.koreanCultureType ? { koreanCultureType: params.koreanCultureType } : {}),
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

export const fetchCultureDetail = (id: string):AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<ICulture>(`/korean-cultures/${id}`)
    dispatch(fetchDetail(res))
  }catch (e) {
    console.log(e)
  }
}

