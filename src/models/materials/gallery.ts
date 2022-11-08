import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListStateWithDetail, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IGallery } from 'entities/gallery'

type initialState = ListStateWithDetail<IGallery>

const slice = createSlice({
  name: 'gallery',
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
    fetch: (state, { payload }: Payload<IGallery[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
    fetchDetail: (state, {payload}: Payload<IGallery>) => {
      state.detail = payload.data
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.gallery }),
  },
})

export const galleryReducer = slice.reducer
const { loading, fetch, fetchDetail } = slice.actions

export const fetchGallery = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IGallery[]>('/photogalleries', {
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

export const fetchGalleryDetail = (id: string): AppThunk => async (dispatch) => {
  try {
    const res = await httpClient.get<IGallery>(`/photogalleries/${id}`)
    dispatch(fetchDetail(res))
  }catch (e) {
    console.log(e)
  }
}

