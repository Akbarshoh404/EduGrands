import React from 'react'
import style from "./style.module.scss"

import LandingNavbar from '../shared/Layouts/Navbar/index.jsx'
import LandingHeader from './header/index.jsx'

const Home = () => {
  return (
    <>
      <LandingNavbar/>
      <LandingHeader/>
    </>
  )
}

export default Home