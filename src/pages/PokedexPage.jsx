import React, { useRef, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import SelectType from '../components/PokedexPage/SelectType'
import PokeCard from '../components/PokedexPage/PokeCard'
import HeaderPokemon from '../components/shared/HeaderPokemon'
import Pagination from '../components/PokedexPage/Pagination'
import { setPokemonName } from '../store/slices/pokemonName.slice'
import { setSelectPokemon } from '../store/slices/selectPokemon.slice'
import { setCurrentPage } from '../store/slices/currentPage.slice'
import { setPokePerPage } from '../store/slices/pokePerPage.slice'
import { setRangePage } from '../store/slices/rangPage.slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './styles/pokedexPage.css'

const PokedexPage = () => {

  const dispatch = useDispatch()

  const trainerName = useSelector(store => store.trainerNameSlice)
  const pokemonName = useSelector(store => store.pokemonName)
  const selectPokemon = useSelector(store => store.selectPokemon)
  const currentPage = useSelector(store => store.currentPage)
  const pokePerPage = useSelector(store => store.pokePerPage)
  const rangPage = useSelector(store => store.rangPage)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=13000&offset=0'
  const [pokemons, getPokemons, getPokemonsByType] = useFetch(url)

  useEffect(() => {
    if(selectPokemon === 'allPokemons') {
      getPokemons()
    }else{
      getPokemonsByType(selectPokemon)
    }
  }, [selectPokemon, pokemonName])

  const inputSearch = useRef()
  const inputPokePerPage = useRef()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setPokemonName(inputSearch.current.value.toLowerCase().trim()))
    dispatch(setRangePage(0))
    dispatch(setCurrentPage(1))
    inputSearch.current.value = ''
  }

  const handlePokePerPage = (e) => {
    e.preventDefault()
    dispatch(setPokePerPage(+inputPokePerPage.current.value))
  }


  const cbFilter = (element) => {
    const filteredName = element.name.includes(pokemonName)
    return filteredName
  }

  const indexOfLastPokemon = currentPage * pokePerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokePerPage

  return (
    <div className='pokedexPage-container'>
      <HeaderPokemon />
      <main className='main-container'>
        <p className='main-p'><span className='main-name'>Welcome {trainerName}, </span>here you can find your favorite pokemon!</p>
        <section className='main-filter'>
          <form className='main-filter-form' onSubmit={handleSearch}>
            <input placeholder='Search a pokemon' className='main-input' ref={inputSearch}></input>
            <button className='main-btn'>Search</button>
          </form>
          <select className='main-filter-select' ref={inputPokePerPage} onChange={handlePokePerPage} defaultValue='9'>
            <option value='3'>3</option>
            <option value='6'>6</option>
            <option value='9'>9</option>
            <option value='12'>12</option>
          </select>
          <SelectType
            setSelectPokemon = {setSelectPokemon}
            setPokemonName = {setPokemonName}
            setCurrentPage = {setCurrentPage}
            setRangePage = {setRangePage}
          />
        </section>
          <div className='main-pokecard-container'>
            {
              pokemons?.results.filter(cbFilter).length !== 0 ? (
                pokemons?.results.filter(cbFilter).slice(indexOfFirstPokemon, indexOfLastPokemon).map(poke => (
                  <PokeCard
                    key = {poke.url}
                    url = {poke.url}
                  />
                ))
              ) : (
                <p className='main-p-pokepage'><span className='main-poke-name'>{pokemonName} </span>does not exist</p>
              )
            }
          </div>
      </main>
      <footer>
        <Pagination
          pokePerPage = {pokePerPage}
          totalPokemons = {pokemons?.results.filter(cbFilter).length}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          rangPage = {rangPage}
          setRangePage = {setRangePage}
        />
      </footer>
    </div>
  )
}

export default PokedexPage
