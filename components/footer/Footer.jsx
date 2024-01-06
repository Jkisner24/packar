import React from 'react';
import { facebook, tiktok, instagram } from '@/public/assets';
import Image from 'next/image';


const Footer = () => {
    return (
      <footer className=" bg-white p-8 rounded-t-xl text-white mt-16">
    
        <div className="text-center mb-8">
            
          <h3 className="text-xl font-bold mb-4 text-black">¡Únete a Packar!</h3>
          <div className="my-3 mx-auto col-12 col-md-6 text-center d-flex flex-column">
        
            <div>
              <Image src={facebook} alt="Facebook" className="w-6 h-6" />
            </div>
            <div>
              <Image src={instagram} alt="Instagram" className="w-6 h-6" />
            </div>
            <div>
              <Image src={tiktok} alt="TikTok" className="w-6 h-6" />
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-black p-8 rounded-md">
        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Destinos</h4>
          <ul className="list-none">
            <li>Enviar paquete a Madrid</li>
            <li>Enviar paquete a Valencia</li>
            <li>Enviar paquete a Asturias</li>
            <li>Enviar paquete a Sevilla</li>
            <li>Enviar paquete a Barcelona</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Más enviados</h4>
          <ul className="list-none">
            <li>Enviar tabla de surf</li>
            <li>Enviar bicicleta</li>
            <li>Enviar paquete grande</li>
            <li>Enviar maleta con ropa</li>
            <li>Enviar mueble</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Blog</h4>
          <ul className="list-none">
            <li>¿Qué es la paquetería colaborativa?</li>
            <li>¿Cómo enviar un paquete grande económico?</li>
            <li>Cómo enviar un paquete en menos de 24 horas</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Enlaces de interés</h4>
          <ul className="list-none">
            <li>Política de Privacidad</li>
            <li>Aviso Legal</li>
            <li>Política de Cookies</li>
            <li>FAQ</li>
            <li>Seguros</li>
          </ul>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;