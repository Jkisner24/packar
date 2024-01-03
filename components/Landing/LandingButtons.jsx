import React from 'react'
import { useRouter } from 'next/navigation'

const LandingButtons = () => {

  const router = useRouter()

  const toLogin = () => {
    router.push("/login")
  }

  const toRegister = () => {
    router.push("/register")
  }

  return (
    <div className='container my-5'>
      <div className="col-12">
          <button
            type="button"
            className="btn w-50 mx-auto p-3 text-light mt-3"
            style={{ background: "var(--accent-color)" }}
            onClick={toRegister}
          >
            Crear cuenta
          </button>
        </div>
        <div className="mt-2 col-12">
          <button
            type="button"
            className="btn w-50 mx-auto p-3 text-dark mt-3"
            style={{ background: "var(--secondary-color)" }}
            onClick={toLogin}
          >
            Iniciar sesión 
          </button>
        </div>
    </div>
  )
}

export default LandingButtons
