import React from 'react'
import LoginForm from './LoginForm'
import { LeftArrow } from '@/public/assets'
import Image from 'next/image'

const LoginComponent = () => {
  return (
   <div className='container'>
     <div className='my-3 col-12 col-md-6 text-left d-flex flex-column'>
      <Image src={LeftArrow} alt="left arrow" style={{cursor: 'pointer'}}/>
      <span className='mt-3 fs-5 fw-bold'>Iniciar sesión</span>
    </div>
    <div className='my-3 col-12 col-md-6 text-left align-items-center d-flex flex-column w-100'>
      <p className='fw-bold fs-3'>Encuentra tu mejor opción <span className='d-block text-left'>al mejor precio.</span></p>
    </div>
    <LoginForm />
   </div>
  )
}

export default LoginComponent
