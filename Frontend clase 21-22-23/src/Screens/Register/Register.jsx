import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'



const Register = () => {

    const handleSubmitRegisterForm = (event) => {
        event.preventDefault()
        const form_HTML = event.target
        const form_values = new FormData(form_HTML)
        const form_fields = {
            'name': '',
            'email': '',
            'password': ''
        }
        const form_values_object = extractFormData(form_fields, form_values)
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //Aca le indicamos al back que lo que enviamos es un JSON
            },
            body: JSON.stringify(form_values_object)
        })
        .then(
            (responseHTTP) => {
                console.log({responseHTTP})
                return responseHTTP.json()
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
            <h1>Registrate en nuesta web</h1>
            <form onSubmit={handleSubmitRegisterForm}>
                <div>
                    <label htmlFor='name'>Ingrese su nombre:</label>
                    <input name='name' id='name' placeholder='Pepe Suarez' />
                </div>
                <div>
                    <label htmlFor='email'>Ingrese su email:</label>
                    <input name='email' id='email' placeholder='pepe@gmail.com' />
                </div>
                <div>
                    <label htmlFor='password'>Ingrese su contraseña:</label>
                    <input name='password' id='password' placeholder='pepe@gmail.com' />
                </div>
                <button type='submit'>Registrar</button>
            </form>
            <span>Si ya tienes cuenta puedes ir a <Link to='/login'>login</Link></span>

        </div>
    )
}

export default Register