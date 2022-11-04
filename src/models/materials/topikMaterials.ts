import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListState, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { ITopikMaterial } from 'entities/material'

type initialState = ListState<ITopikMaterial>

const slice = createSlice({
  name: 'topikMaterial',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<ITopikMaterial[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.topikMaterials }),
  },
})

export const topikMaterialsReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchTopikMaterials = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<ITopikMaterial[]>('/materials-of-topics', {
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

