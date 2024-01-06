import { data } from '@/features'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='w-100 p-3 my-3' style={{position: 'relative'}} id="linkedFeatures">
      <h4 className='fw-bold text-center'>Características</h4>
      <div className='row justify-content-center' style={{zIndex: -1}}>
        {data.map((service, i) => (
          <div className='col-12 col-md-4 mb-3' key={i}>
            <div className='p-3 border rounded text-center' style={{ height: '300px', backgroundColor: 'rgba(252, 249, 249, 0.7)'}}>
              <Image src={service.icon} alt={service.title} width={60} height={60} />
              <h5>{service.title}</h5>
              <p style={{ WebkitLineClamp: 5, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
