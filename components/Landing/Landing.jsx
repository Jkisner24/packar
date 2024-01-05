import React, { useEffect } from 'react'
import LandingText from './LandingText'
import LandingButtons from './LandingButtons'
import { useDispatch } from 'react-redux'
import { getUsers } from '@/store/slice'

const Landing = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

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
