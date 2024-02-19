import { configureStore } from "@reduxjs/toolkit"
import trainerNameSlice from "./slices/trainerName.slice"
import pokemonName from "./slices/pokemonName.slice.js"
import selectPokemon from "./slices/selectPokemon.slice.js"
import currentPage from "./slices/currentPage.slice.js"
import pokePerPage from "./slices/pokePerPage.slice.js"
import rangPage from "./slices/rangPage.slice.js"

const store = configureStore({
  reducer: {
    trainerNameSlice,
    pokemonName,
    selectPokemon,
    currentPage,
    pokePerPage,
    rangPage
  }
})

export default store
