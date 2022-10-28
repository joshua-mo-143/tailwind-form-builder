import React from 'react'
import {Router, Route, Routes} from 'react-router-dom'
type Props = {}

const AllPages = (props: Props) => {
  return (
    <Routes>
      <Route path="/" component={<Home/>}/>
      <Route path="/formbuilder" component={<FormBuilder/>}/>
      </Routes>
  )
}

export default AllPages