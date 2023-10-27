import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './register.scss';
import fileUpload from '../../services/fileUpload';
import Swal from 'sweetalert2';
import { createAnUser } from '../../services/userServices';

const Register = () => {
    const { dataForm, handleChangeInputs } = useForm();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const urlImage = await fileUpload(dataForm.avatar[0]);
        if (urlImage) {
            const newUser = {
                ...dataForm,
                avatar: urlImage
            }
            const response = await createAnUser(newUser);
            console.log(response);
            if (response) {
                Swal.fire('Excelente!', 'Has creado exitosamente una cuenta', 'success').then(() => {
                    navigate('/login');
                })
            } else {
                const message = response === false ? 'Ya existe un usuario con este email' : 'Ha ocurrido un error en la creación de tu cuenta'
                Swal.fire('Oops!', message, 'error');
            }

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