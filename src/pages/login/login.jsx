import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <main className='login'>
        <h1>Inicie sesión</h1>
        <form>
            <label>Ingrese su correo electrónico:</label>
            <input type="text" placeholder='example@email.com' />
            <label>Ingrese su contraseña:</label>
            <input type='password' placeholder='Contraseña'/>
            <button type='submit'>Iniciar sesión</button>            
        </form>
    </main>
  )
}

export default Login