import React from 'react'
import NavBar from '../nav/NavBar'
import GifComponent from './GifComponent'
import Features from './Features'
import AboutUs from './AboutUs'
import Footer from '../footer/Footer'
const HomeComponent = () => {
  return (
    <div className='w-100 h-auto'>
      <NavBar />
      <GifComponent />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default HomeComponent
