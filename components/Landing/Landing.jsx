"use client"
import React, { useEffect } from 'react'
import LandingText from './LandingText'
import LandingButtons from './LandingButtons'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '@/store/slice'

const Landing = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.slice.users)
  console.log("array de usuarios", users)

  useEffect(() => {
    console.log(dispatch(getUsers()))
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
