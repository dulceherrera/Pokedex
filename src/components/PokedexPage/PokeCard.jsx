import React, {useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {

  const [infoPokemon, getInfoPokemon] = useFetch(url)

  useEffect(() => {
    getInfoPokemon()
  }, [])

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/pokedex/${infoPokemon.id}`)
  }

  return (
    <article onClick={handleNavigate} className={`container-pokeCard ${infoPokemon?.types[0].type.name}-gradient`}>
      <header className='pokerCard-header'>
        <img className='img-pokecard-header' src={infoPokemon?.sprites.other["official-artwork"].front_default} alt='pokemon'></img>
      </header>
      <section className='pokeCard-info'>
        <h3 className='pokeCard-title'>{infoPokemon?.name}</h3>
        <ul className='pokeCard-info-type'>
          {
            infoPokemon?.types.map(infoType => (
              <li className='pokeCard-infotype-li' key={infoType.type.url}>{infoType.type.name}</li>
            ))
          }
        </ul>
        <p className='pokeCard-info-p'>Type</p>
        <hr className='pokeCard-info-sep'></hr>
        <ul className='pokeCard-info-stats'>
          {
            infoPokemon?.stats.map(infoStat => (
              <li className='pokeCard-stats-li' key={infoStat.stat.url}>
                <span className='pokeCard-stats-name'>{infoStat.stat.name}</span>
                <span className='pokeCard-stats-stat'>{infoStat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard
