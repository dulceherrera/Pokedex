import { createSlice } from '@reduxjs/toolkit'

const pokePerPageSlice = createSlice({
  name: 'pokePerPage',
  initialState: 9,
  reducers: {
    setPokePerPage: (currentValue, action) => action.payload
  }
})

export const { setPokePerPage } = pokePerPageSlice.actions
export default pokePerPageSlice.reducer
