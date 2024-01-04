"use client"
import React from 'react'
import CountryCode from './CountryCode'

const SelectPhoneNumber = () => {
  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
      <CountryCode />
              <input
                placeholder='Número de teléfono'
                type="number"
                className="form-control px-3 mx-3 w-50"
                id="number"
                aria-describedby="phoneNumber"
              />
    </div>
  )
}

export default SelectPhoneNumber
