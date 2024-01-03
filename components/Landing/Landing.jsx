import React from 'react'
import LandingText from './LandingText'
import LandingButtons from './LandingButtons'

const Landing = () => {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height: '100vh',background: 'var(--primary-color)'}}>
      <div className='text-center'>
        <LandingText />
        <LandingButtons />
      </div>
    </div>
  )
}

export default Landing
