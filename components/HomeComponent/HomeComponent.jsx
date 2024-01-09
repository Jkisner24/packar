import React from 'react'
import Navbar from '../Navbar/Navbar'
import GifComponent from './GifComponent'
import Features from './Features'
import AboutUs from './AboutUs'
import Footer from '../footer/Footer'
import Logic from '../Logic/Logic'
const HomeComponent = () => {
  return (
    <div className='w-100 h-auto'>
      <Navbar />
      <GifComponent />
      <Features />
      <AboutUs />
      <Logic/>
      <Footer />
    </div>
  )
}

export default HomeComponent
