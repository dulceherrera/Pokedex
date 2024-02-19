import { createSlice } from '@reduxjs/toolkit'

const rangPageSlice = createSlice({
  name: 'rangPage',
  initialState: 0,
  reducers: {
    setRangePage: (currentValue, action) => action.payload
  }
})

export const { setRangePage } = rangPageSlice.actions

export default rangPageSlice.reducer
