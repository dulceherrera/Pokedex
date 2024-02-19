import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useRef, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './styles/selectType.css'

const SelectType = ({setSelectPokemon, setPokemonName, setCurrentPage, setRangePage}) => {

  const url = 'https://pokeapi.co/api/v2/type'

  const [infoTypes, getInfoTypes] = useFetch(url)

  const dispatch = useDispatch()

  useEffect(() => {
    getInfoTypes()
  }, [])

  const selectElement = useRef()

  const handleSelect = () => {
    dispatch(setSelectPokemon(selectElement.current.value))
    setPokemonName('')
    setCurrentPage(1)
    setRangePage(0)
  }

  return (
    <select className='select-type' onChange={handleSelect} ref={selectElement}>
      <option value='allPokemons'>All Pokemons</option>
      {
        infoTypes?.results.map(type => (
          <option key={type.url} value={type.url}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType
