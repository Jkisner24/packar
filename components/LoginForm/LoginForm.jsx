import React from 'react'

const LoginForm = () => {
  return (
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <div id="emailHelp" className="text-primary">¿Has olvidado la contraseña?</div>
  </div>
  <button type="submit" class="btn text-light" style={{background: 'var(--primary-color)'}}>Iniciar sesión</button>
</form>
  )
}

export default LoginForm
