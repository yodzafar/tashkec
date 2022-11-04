import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListState, Payload } from 'types/common'
import { ICenterStructure } from 'entities/about'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'

type initialState = ListState<ICenterStructure>

const slice = createSlice({
  name: 'structure',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<ICenterStructure[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.structure }),
  },
})

export const structureReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchCenterStructure = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<ICenterStructure[]>('/center-structures')
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

