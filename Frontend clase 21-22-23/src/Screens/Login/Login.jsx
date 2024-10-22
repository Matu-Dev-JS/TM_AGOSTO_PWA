import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'

const Login = () => {

  const handleSubmitLoginForm = (e) => {
    e.preventDefault()
    const form_HTML = e.target
    const form_Values = new FormData(form_HTML)
    const form_fields = {
        'email': '',
        'password': ''
    }
    const form_values_object = extractFormData(form_fields, form_Values)
    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //Aca le indicamos al back que lo que enviamos es un JSON
        },
        body: JSON.stringify(form_values_object)
    })
        .then(
            (response) => { 
              console.log({ response }) 
              return response.json()
            }
        )
        .then(
          (body) => {
              console.log({body})
          }
        )
        .catch(
            (error) => { console.error(error) }
        )
    }

  return (
    <div>
      <h1>Inicia sesion</h1>
      <form onSubmit={handleSubmitLoginForm}>
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
      <br/>
      <span>Has olvidado la contraseña? <Link to='/forgot-password'>Restablecer</Link></span>

    </div>
  )
}

export default Login