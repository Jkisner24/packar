import React from 'react';
import { facebook, tiktok, instagram } from '@/public/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="p-3 rounded-t-xl text-black mt-16">
      <div className="text-end mb-8">
        <h3 className="text-xl  font-bold mb-4 text-black">¡Únete a Packar!</h3>
        <div className="text-end w-100 my-3 mx-auto col-12 col-md-6 d-flex justify-content-end">
          <div>
            <Image  src={facebook} alt="Facebook" className="w-6 h-6" style={{cursor: 'pointer'}} />
          </div>
          <div>
            <Image src={instagram} alt="Instagram" className="w-6 h-6"  style={{cursor: 'pointer'}} />
          </div>
          <div>
            <Image src={tiktok} alt="TikTok" className="w-6 h-6" style={{cursor: 'pointer'}} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4 flex-md-nowrap">
        <div className='text-left p-3'>
          <h4 style={{fontSize: '1.2rem'}} className="font-bold  text-center">Destinos</h4>
          <ul style={{listStyle: 'none', fontSize: '0.9rem', margin: 0, padding: 0}}>
            <li>◆ Enviar paquete a Madrid</li>
            <li>◆ Enviar paquete a Valencia</li>
            <li>◆ Enviar paquete a Asturias</li>
            <li>◆ Enviar paquete a Sevilla</li>
            <li>◆ Enviar paquete a Barcelona</li>
          </ul>
        </div>

        <div className='text-left p-3'>
          <h4 style={{fontSize: '1.2rem'}} className="font-bold text-center">Más enviados</h4>
          <ul style={{listStyle: 'none', fontSize: '0.9rem', margin: 0, padding: 0}}>
            <li>◆ Enviar tabla de surf</li>
            <li>◆ Enviar bicicleta</li>
            <li>◆ Enviar paquete grande</li>
            <li>◆ Enviar maleta con ropa</li>
            <li>◆ Enviar mueble</li>
          </ul>
        </div>
 
        <div className='text-left p-3'>
          <h4 style={{fontSize: '1.2rem'}} className="font-bold text-center">Blog</h4>
          <ul style={{listStyle: 'none', fontSize: '0.9rem', margin: 0, padding: 0}}>
            <li>◆ ¿Qué es la paquetería colaborativa?</li>
            <li>◆ ¿Cómo enviar un paquete grande económico?</li>
            <li>◆ Cómo enviar un paquete en menos de 24 horas</li>
          </ul>
        </div>

        <div className='text-left p-3'>
          <h4 style={{fontSize: '1.2rem'}} className="font-bold text-center">Enlaces de interés</h4>
          <ul style={{listStyle: 'none', fontSize: '0.9rem', margin: 0, padding: 0}} className='text-start w-100'>
            <li>◆ Política de Privacidad</li>
            <li>◆ Aviso Legal</li>
            <li>◆ Política de Cookies</li>
            <li>◆ FAQ</li>
            <li>◆ Seguros</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
