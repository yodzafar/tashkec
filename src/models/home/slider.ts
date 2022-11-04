import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISlider } from 'entities/main'
import { ListState } from 'types/common'
import { AppThunk } from 'store'
import { HYDRATE } from 'next-redux-wrapper'
import home from 'service/home'
import { AxiosResponse } from 'axios'

type InitialState = ListState<ISlider>

const slice = createSlice({
  name: 'slider',
  initialState: {
    count: 0,
    list: [],
    isLoading: false,
  } as InitialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload
    },
    fetchList: (state, action: PayloadAction<AxiosResponse<ISlider[]>>) => {
      state.list = action.payload.data
      state.count = action.payload.data.length
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.slider }),
  },
})

const { loading, fetchList } = slice.actions
export const sliderReducer = slice.reducer

export const fetchSliders = (): AppThunk =>
  async dispatch => {
    try {
      dispatch(loading(true))
      const res = await home.getBannerList()
      dispatch(fetchList(res))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loading(false))
    }
  }