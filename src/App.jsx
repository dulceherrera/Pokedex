import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeInfoPage from './pages/PokeInfoPage'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route element={ <ProtectedRoutes /> }>
          <Route path='/pokedex' element={ <PokedexPage /> } />
          <Route path= '/pokedex/:id' element= {<PokeInfoPage /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
