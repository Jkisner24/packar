import Image from 'next/image'
import React from 'react'
import { MobilePhoneNumberSvg } from '@/public/assets'
import SelectPhoneNumber from './SelectPhoneNumber'

const MobilePhoneNumber = () => {
  return (
    <div className='content w-100 d-flex justify-content-center align-items-center'>
        <div className='text-center'>
          <Image className='my-5' src={MobilePhoneNumberSvg} alt='Checked' width={350} height={300}/>
          <p className='fw-bold fs-5 mt-5 mb-3'>Introduce tu número de teléfono</p>
          <SelectPhoneNumber />
        </div>
       
    </div>
  )
}

export default MobilePhoneNumber
