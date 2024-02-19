import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'



const HomePage = () => {

  const dispatch = useDispatch()

  const textInput = useRef()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(textInput.current.value.trim()));
    navigate('/pokedex')
  }

  return (
    <>
      <div className='container-pokedex'>
        <img src='./pokedex.png' alt='pokedex logo' className='pokedex-img'></img>
        <h1 className='title-pokedex'>Hi Trainer!</h1>
        <p className='pokedex-start'>To start, please give your name</p>
        <form onSubmit={handleSubmit}>
          <input placeholder='Your name...' className='pokedex-input' ref={textInput}></input>
          <button className='pokedex-button'>Start</button>
        </form>
      </div>
      <footer className='container-footer'>
        <img src='./pokeball.png' alt='pokeball' className='pokeball-footer'></img>
        <p className='footer-red'></p>
        <p className='footer-black'></p>
      </footer>
    </>
  )
}

export default HomePage
