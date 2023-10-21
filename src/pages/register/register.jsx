import React from 'react'
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './register.scss';
import fileUpload from '../../services/fileUpload';
import Swal from 'sweetalert2';

const Register = () => {
    const { dataForm, handleChangeInputs } = useForm();

    const handleRegister = async (e) => {
        e.preventDefault();
        const urlImage = await fileUpload(dataForm.avatar[0]);
        if (urlImage) {
            const newUser = {
                ...dataForm,
                avatar: urlImage
            }
            console.log(newUser);
        } else {
            Swal.fire('Oops', 'Ha ocurrido un error en el cargue de la imagen', 'error');
        }

    }
    
    return (
        <main className='register'>
            <h1>Crear una cuenta</h1>
            <form onSubmit={handleRegister}>
                <label>Ingrese su nombre:</label>
                <input type="text" name='name' placeholder='Nombre Apellido' onChange={handleChangeInputs} />
                <label>Ingrese su correo electrónico:</label>
                <input type="text" name='email' placeholder='example@email.com' onChange={handleChangeInputs} />
                <label>Ingrese su contraseña:</label>
                <input type='password' name='password' placeholder='Contraseña' onChange={handleChangeInputs} />
                <label>Confirme su contraseña:</label>
                <input type='password' name='repeatPassword' placeholder='Contraseña' onChange={handleChangeInputs} />
                <label>Carge su imagen:</label>
                <input type='file' name='avatar' onChange={handleChangeInputs} />
                <button type='submit'>Crear cuenta</button>
            </form>
            <span>¿Ya tienes una cuenta? <Link to={'/login'}>Inicia sesión</Link></span>
        </main>
    )
}

export default Register