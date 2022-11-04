import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListState, Payload } from 'types/common'
import { IGreeting } from 'entities/about'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'

type initialState = ListState<IGreeting>

const slice = createSlice({
  name: 'greeting',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<IGreeting[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.greeting }),
  },
})

export const greetingReducer = slice.reducer
const {loading, fetch} = slice.actions

export const fetchGreeting = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IGreeting[]>('/greetings')
    dispatch(fetch(res))
  }catch (e){
    console.log(e)
  }
  finally {
    dispatch(loading(false))
  }
}

