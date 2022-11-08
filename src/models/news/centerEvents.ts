import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IEvents, INews } from 'entities/news'

type initialState = ListStateWithDetail<INews>

const slice = createSlice({
  name: 'events',
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
    fetch: (state, { payload }: Payload<IEvents[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },

    fetchDetail: (state, {payload}: Payload<IEvents>) => {
      state.detail = payload.data
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.events }),
  },
})

export const eventsReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchEvents = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IEvents[]>('/events/published', {
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

export const fetchEventsDetail = (id: string): AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<IEvents>(`/events/${id}`)
    dispatch(fetchDetail(res))
  } catch (e) {
    console.log(e)
  }
}

