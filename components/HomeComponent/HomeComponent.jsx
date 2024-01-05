import React from 'react'
import Navbar from '../NavBar/Navbar'
import GifComponent from './GifComponent'

const HomeComponent = () => {
  return (
    <div className='w-100 h-auto'>
      <Navbar />
      <GifComponent />
    </div>
  )
}

export default HomeComponent
