import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const slice = createSlice({
  name: '',
  initialState: {} as any,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.slider }),
  },
})

export default slice.reducer

