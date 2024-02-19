import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';
import HeaderPokemon from '../components/shared/HeaderPokemon';
import {useEffect} from 'react'
import './styles/pokeInfoPage.css'

const PokeInfoPage = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [])

  const handleNavigate = () => {
    navigate('/pokedex')
  }

  return (
    <>
      <HeaderPokemon />
      <article className='pokemon-ind-container'>
        <span className='pokeInfo-back'><i onClick={handleNavigate} className='fa-solid fa-arrow-left pokeInfo-back pokeInfo-back-arrow'></i></span>
        <header className='pokeInfo-header' style={{background: `linear-gradient(var(--color-${pokemon?.types[0].type.name}), white)`}}>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} className='pokeinfo-img' alt='pokemon-img'></img>
        </header>
        <section className='pokeInfo-card'>
          <h3 className='pokeInfo-card-id'>#{pokemon?.id}</h3>
          <section className='pokeInfo-card-name'>
            <hr />
            <h2 className='pokeinfo-card-name-h2'>{pokemon?.name}</h2>
            <hr />
          </section>
          <section className='pokeinfo-card-data'>
            <p className='pokeinfo-card-p'>Weight: <span>{pokemon?.weight}</span></p>
            <p className='pokeinfo-card-p'>Height: <span>{pokemon?.height}</span></p>
          </section>
          <section className='pokeinfo-card-stats-ty-ab'>
            <p className='pokeinfo-card-stats-ty-ab-p'>Type</p>
            <p className='pokeinfo-card-stats-ty-ab-p'>Abilities</p>
            <ul className='pokeinfo-card-ty-ab'>
              {
                pokemon?.types.map(infoType => (
                  <li key={infoType.type.url} style={{background: `var(--color-${infoType.type.name})`, color: 'white'}}>{infoType.type.name}</li>
                ))
              }
            </ul>
            <ul className='pokeinfo-card-ty-ab'>
              {
                pokemon?.abilities.map(infoType => (
                  <li key={infoType.ability.url} style={{border: '2px solid #F0F0F0'}}>{infoType.ability.name}</li>
                ))
              }
            </ul>
          </section>
          <ul className='pokeInfo-card-stats'>
            <h2 className='pokeInfo-card-stats-title'>Stats</h2>
              {
                pokemon?.stats.map(infoStat => (
                  <>
                    <li className='pokeInfo-card-stat' key={infoStat.stat.url}>
                      <span key={infoStat.stat.name}>{infoStat.stat.name} </span>
                      <span key={`${infoStat.stat.name}2`}>{infoStat.base_stat}/150</span>
                    </li>
                    <section className='pokeinfo-stat-graph' key={`${infoStat.stat.name}-1`}>
                      <p className='pokeinfo-stat-graph-1' key={`${infoStat.stat.name}-4`} style={{width: `${infoStat.base_stat}%`}}></p>
                      <p className='pokeinfo-stat-graph-2' key={`${infoStat.stat.name}-3`} style={{width: `${150 - infoStat.base_stat }%`}}></p>
                    </section>
                  </>
                ))
              }
          </ul>
        </section>
      </article>
      <article className='pokeinfo-card-movements'>
        <h2>Movements</h2>
        <ul className='pokeinfo-moves-ul'>
          {
            pokemon?.moves.map(infoMove => (
              <li className='pokeInfo-move' key={infoMove.move.url}>
                {infoMove.move.name}
              </li>
            ))
          }
        </ul>
      </article>
    </>
  )
}

export default PokeInfoPage
