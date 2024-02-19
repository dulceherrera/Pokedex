import React from 'react'
import '../shared/headerPokemon.css'
import { Link } from 'react-router-dom'


const HeaderPokemon = () => {
  return (
    <header className='header-container'>
      <Link to='/'>
        <img className='header-img-pokedex' src='./pokedex.png' alt='pokedex-logo'></img>
      </Link>
      <img className='header-img-pokeball' src='./pokeball.png' alt='pokeball'></img>
      <p className='header-red'></p>
      <p className='header-black'></p>
    </header>
  )
}

export default HeaderPokemon
