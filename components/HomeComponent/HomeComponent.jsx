import React from 'react'
import Navbar from '../Navbar/Navbar'
import GifComponent from './GifComponent'
import Features from './Features'

const HomeComponent = () => {
  return (
    <div className='w-100 h-auto'>
      <Navbar />
      <GifComponent />
      <Features />
    </div>
  )
}

export default HomeComponent
