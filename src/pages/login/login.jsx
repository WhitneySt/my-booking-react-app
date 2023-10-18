import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { AppContext } from '../../router/router';
import './login.scss';
import { getUserByEmailAndPassword } from '../../services/userServices';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
  const { dataForm, handleChangeInputs } = useForm();
  const { userLogged: { userLoggedDispatch } } = useContext(AppContext);



  const handleLogin = async (e) => {
    e.preventDefault();
    if (dataForm.email.trim() && dataForm.password.trim()) {
      const user = await getUserByEmailAndPassword(dataForm.email, dataForm.password);
      if (user) {
        Swal.fire(
          'Excelente!',
          'Has iniciado sesión exitosamente!',
          'success'
        )
        const action = {
          type: 'LOGIN',
          payload: {
            isAuthenticated: true,
            user: user
          }
        }
        userLoggedDispatch(action);    

      } else {
        Swal.fire(
          'Oops!',
          'Por favor verifique sus credenciales!',
          'error'
        )
      }
    }

  }

  return (
    <main className='login'>
      <h1>Inicie sesión</h1>
      <form onSubmit={handleLogin}>
        <label>Ingrese su correo electrónico:</label>
        <input type="text" name='email' placeholder='example@email.com' onChange={handleChangeInputs} />
        <label>Ingrese su contraseña:</label>
        <input type='password' name='password' placeholder='Contraseña' onChange={handleChangeInputs} />
        <button type='submit'>Iniciar sesión</button>
      </form>
      <span>¿Todavía no tienes una cuenta? <Link to={'/register'}>Regístrate</Link></span>
    </main>
  )
}

export default Login