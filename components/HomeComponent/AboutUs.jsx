import { CeoPackar, DeliveryTruck } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className='w-100 h-auto my-3 d-flex flex-column' id='about-us'>
      <div className='w-100 d-flex flex-column flex-md-row'>
        <div className='p-3 mx-3 text-center text-md-left' style={{ minWidth: '50%', maxWidth: '80%', width: 'auto' }}>
          <Image src={DeliveryTruck} alt='Delivery Truck' layout="responsive" width={500} height={450}/>
        </div>
        <div className='d-block text-center text-md-left p-3 mx-3'>
          <h4 style={{ fontSize: '1.5rem' }}>Eleva tu negocio de transporte a nuevas alturas</h4>
          <p style={{ fontSize: '0.9rem' }}>
            Obtén reputación, conecta directamente con clientes y muestra tu notable talento a una audiencia global. Con nuestra plataforma, no eres solo un transportista; eres un innovador, un creador y una influencia en la industria del transporte.
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            Aumenta tu credibilidad y visibilidad en el mundo del transporte. Establece comunicación directa y construye relaciones duraderas.
          </p>
          <div className="card">
            <div className="card-body">
              <div className='w-100 d-flex align-items-center justify-content-center my-3 flex-column flex-md-row'>
                <Image className='text-left' src={CeoPackar} alt='CEO Packar' width={70} height={60} />
                <h5 className="card-title">Antonio CEO de PACKAR</h5>
              </div>
              <p style={{ fontSize: '15px' }} className="card-text">Lidero un equipo comprometido a revolucionar la industria del transporte y logística, ofreciendo soluciones innovadoras y un servicio excepcional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
