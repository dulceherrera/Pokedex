import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {

  const trainerName = useSelector(store => store.trainerNameSlice)

  if(trainerName.length > 2){
    return <Outlet />
  }else{
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes
