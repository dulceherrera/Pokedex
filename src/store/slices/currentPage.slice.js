import { createSlice } from '@reduxjs/toolkit'

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    setCurrentPage: (currentValue, action) => action.payload
  }
})

export const { setCurrentPage } = currentPageSlice.actions
export default currentPageSlice.reducer
