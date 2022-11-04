import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListState, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { ITopikLevel } from 'entities/material'

type initialState = ListState<ITopikLevel>

const slice = createSlice({
  name: 'topikLevels',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<ITopikLevel[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.topikLevels }),
  },
})

export const topikLevelsReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchTopikLevels = (id: string, params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<ITopikLevel[]>('/level-of-topics/by-material-of-topic', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        materialOfTopicId: id
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

