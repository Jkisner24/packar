import { TransportistGif } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const GifComponent = () => {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className='text-center text-white' style={{position: 'absolute', zIndex: '1', background: 'linear-gradient(rgba(197, 195, 195, 0.7), rgba(165, 159, 159, 0.7))', borderRadius: '10px', padding: '20px'}}>
      <p className='fw-bold fs-2'>Descubre a Nuestros <span className='text-center d-block text-white'>Transportistas</span></p>
      <p className='fw-normal fs-5 text-center mt-4'>
        Conectamos a los mejores transportistas para brindarte un servicio rápido y confiable.
      </p>
      </div>
      <Image src={TransportistGif} alt='Transportistas' style={{objectFit: 'cover', width: '100%', height: '400px', position: 'relative', zIndex: '-1', filter: 'blur(5px)'}} />
    </div>
  )
}

export default GifComponent
