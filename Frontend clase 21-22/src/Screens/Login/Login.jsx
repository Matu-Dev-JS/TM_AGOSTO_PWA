import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  

  return (
    <div>
      <h1>Inicia sesion</h1>
      <form>
        <div>
          <label htmlFor='email'>Ingrese su email:</label>
          <input name='email' id='email' placeholder='pepe@gmail.com' />
        </div>
        <div>
          <label htmlFor='password'>Ingrese su contraseña:</label>
          <input name='password' id='password' placeholder='pepe@gmail.com' />
        </div>
        <button type='submit'>Iniciar sesion</button>
      </form>
      <span>Si aun no tienes cuenta puedes <Link to='/register'>Registrarte</Link></span>

    </div>
  )
}

export default Login