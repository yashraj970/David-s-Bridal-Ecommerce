import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DressesProd from '../Pages/DressesProd'


const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/dressespage' element={<DressesProd/>} ></Route>
    </Routes>
  )
}

export default AllRoutes 
