import React from 'react'
import Link from 'next/link'

const LandingButtons = () => {

  return (
    <div className='container my-5'>
      <div className="col-12">
          <Link
            href='/register'
            type="button"
            className="btn w-50 mx-auto p-3 text-light mt-3"
            style={{ background: "var(--accent-color)" }}
          >
            Crear cuenta
          </Link>
        </div>
        <div className="mt-2 col-12">
          <Link
            href='/login'
            type="button"
            className="btn w-50 mx-auto p-3 text-dark mt-3"
            style={{ background: "var(--secondary-color)" }}
          >
            Iniciar sesión 
          </Link>
        </div>
    </div>
  )
}

export default LandingButtons
