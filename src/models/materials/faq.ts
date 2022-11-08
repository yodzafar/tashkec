import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IAnswer } from 'entities/faq'

type initialState = ListStateWithDetail<IAnswer>

const slice = createSlice({
  name: 'faq',
  initialState: {
    isLoading: false,
    list: [],
    detail: null,
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<IAnswer[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
    fetchDetail: (state, { payload }: Payload<IAnswer>) => {
      state.detail = payload.data
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.faq }),
  },
})

export const faqReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchFaq = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IAnswer[]>('/question-answers', {
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

export const fetchFaqDetail = (id: string): AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<IAnswer>(`/question-answers/${id}`)
    dispatch(fetchDetail(res))
  } catch (e) {
    console.log(e)
  }
}

