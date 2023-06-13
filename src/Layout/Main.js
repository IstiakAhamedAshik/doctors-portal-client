import React from 'react'
import Header from '../pages/sharedpages/Header/Header'
import { Outlet } from 'react-router-dom'
import Foter from '../pages/sharedpages/Foter/Foter'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Foter></Foter>
    </div>
  )
}

export default Main
