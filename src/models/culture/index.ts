import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListState, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { ICulture } from 'entities/culture'

type initialState = ListState<ICulture>

const slice = createSlice({
  name: 'culture',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<ICulture[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.culture }),
  },
})

export const cultureReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchCulture = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<ICulture[]>('/korean-cultures', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        ...(params?.koreanCultureType ? { [params.koreanCultureType]: params.koreanCultureType } : {}),
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

