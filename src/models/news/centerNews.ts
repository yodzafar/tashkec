import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { INews } from 'entities/news'

type initialState = ListStateWithDetail<INews>

const slice = createSlice({
  name: 'news',
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
    fetch: (state, { payload }: Payload<INews[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
    fetchDetail: (state, {payload}: Payload<INews>) => {
      state.detail = payload.data
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.news }),
  },
})

export const newsReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchNews = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<INews[]>('/news/published', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

export const fetchNewsDetail = (id: string) : AppThunk => async  (dispatch) => {
  try {
    const res = await httpClient.get<INews>(`/news/${id}`)
    dispatch(fetchDetail(res))
  }catch (e) {
    console.log(e)
  }
}

