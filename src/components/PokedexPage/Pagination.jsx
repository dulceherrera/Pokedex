import React from 'react'
import './styles/pagination.css'
import { useDispatch } from 'react-redux'

const Pagination = ({pokePerPage, totalPokemons, currentPage, setCurrentPage, rangPage, setRangePage}) => {

  const dispatch = useDispatch()

  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalPokemons / pokePerPage); i++){
    pageNumbers.push(i)
  }


  const numberPagination = 5;

  const handlePage = e => {
    dispatch(setCurrentPage(e.target.id))
  }

  const rangPageMinus = () => {
    dispatch(setRangePage(rangPage - numberPagination))
    console.log(rangPage)
  }

  const rangPagePlus = () => {
    dispatch(setRangePage(rangPage + numberPagination))
  }

  return (
    <nav className='container-pages'>
      <ul className='pagination-list'>
        {
          rangPage > 0 ?(
            <li onClick={rangPageMinus} className='pagination-list-item'><button className='pagination-list-btn'><i className="fa-solid fa-caret-left"></i></button></li>
          )
            : ''
        }
        {
          pageNumbers.filter(number => rangPage < number && number <= (rangPage + numberPagination)).map(number =>(
            <li className='pagination-list-item' key = {number}>
              <button className={`pagination-list-btn ${(number == currentPage) && 'selected'}`} onClick={handlePage} id = {number}>{number}</button>
            </li>
          ))
        }
        {
          (rangPage + 8) < pageNumbers.length ? (
            <li className='pagination-list-item' onClick={rangPagePlus}><button className='pagination-list-btn'><i className="fa-solid fa-caret-right"></i></button></li>
          )
          : ''
        }
      </ul>
    </nav>
  )
}

export default Pagination
