import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ListParams, ListState, Payload } from 'types/common'
import { AppThunk } from 'store'
import httpClient from 'service'
import { getListCountFromHeader } from 'utils/common'
import { IInstitution } from 'entities/institution'

type initialState = ListState<IInstitution>

const slice = createSlice({
  name: 'education',
  initialState: {
    isLoading: false,
    list: [],
    count: 0,
  } as initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.isLoading = payload
    },
    fetch: (state, { payload }: Payload<IInstitution[]>) => {
      state.list = payload.data
      state.count = getListCountFromHeader(payload.headers)
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.education }),
  },
})

export const educationReducer = slice.reducer
const { loading, fetch } = slice.actions

export const fetchEducation = (params?: ListParams): AppThunk => async (dispatch) => {
  try {
    dispatch(loading(true))
    const res = await httpClient.get<IInstitution[]>('/educations/education-type', {
      params: {
        size: params?.size || 10,
        page: params?.page || 0,
        ...(params?.educationTypeEnum ? { [params.educationTypeEnum]: params.educationTypeEnum } : {}),
      },
    })
    dispatch(fetch(res))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(loading(false))
  }
}

