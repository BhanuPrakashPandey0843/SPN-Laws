import React from 'react'
import LandingPage from '../../LandingPage/LandingTop'
import LandingBottom from '../../LandingPage/LandingBottom'
import AllSection from '../AllSection'

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <AllSection/>
      <LandingBottom/>
    </div>
  )
}

export default Home
