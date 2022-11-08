import { ListParams, ListState, Payload } from 'types/common'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { IAttachment } from 'entities/attachment'
import { AppThunk } from 'store'
import httpClient from 'service'

type initialState = ListState<IAttachment>

const slice = createSlice({
  name: 'history',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<IAttachment[]>) => {
      state.list = payload.data
      state.count = payload.data.length
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.history }),
  },
})

export const attachmentReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchAttachments = (params?: ListParams): AppThunk => async (dispatch) => {
  if (params?.url) {
    try {
      dispatch(loading(true))
      const res = await httpClient.get<IAttachment[]>(`/attachments/${params.url}`, {
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
}