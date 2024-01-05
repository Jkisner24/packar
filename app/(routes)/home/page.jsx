"use client"
import React from 'react'
import HomeComponent from '@/components/HomeComponent/HomeComponent'
import Navbar from '@/components/NavBar/Navbar'

const page = () => {
  return (
    <div className='w-100 h-auto' style={{minHeight: '100vh'}}>
      <HomeComponent />
    </div>
  )
}

export default page
