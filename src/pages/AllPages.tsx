import React from 'react'
import {Router, Route, Routes, useParams, BrowserRouter} from 'react-router-dom'
import FormBuilder from './FormBuilder'
import Home from './Home'


const AllPages = () => {
  return (
<BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/formbuilder" element={<FormBuilder/>}/>
      </Routes>
      </BrowserRouter>

  )
}

export default AllPages