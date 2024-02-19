import { createSlice } from '@reduxjs/toolkit'

const selectPokemonSlice = createSlice({
  name: 'selectPokemon',
  initialState : 'allPokemons',
  reducers: {
    setSelectPokemon: (currentValue, action) => action.payload
  }
})

export const { setSelectPokemon } = selectPokemonSlice.actions
export default selectPokemonSlice.reducer
