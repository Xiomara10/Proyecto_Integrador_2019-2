import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
    
const submitForm = e =>{
    e.preventDefault();
    const form = e.target
    //this.props.history.push('/')  direccionar al home

    const data = {
        "correo": form.email.value,
        "contraseña": form.password.value
    }

    Axios.post('http://localhost:8085/auth/login', data)
    .then(r => {
        localStorage.setItem('token', r.data.token) 
        window.location = "/"
    })
    .catch(e => console.log(e.response))
}

const Login = () => {
    return(
    <div className="ed-grid">
        <div className="l-block"></div>
        <div className="m-to-center m-60 lg-30">   
            <form className="login-form" method="POST" onSubmit={submitForm.bind()}> 
                <h2 className="center">Iniciar Sesión</h2>
                <div className="form__item">
                    <label>Email</label>
                    <input  type="email" name="email" id="email" required/>      
                </div>
                <div className="form__item">
                    <label>Contraseña</label>
                    <input  type="password" name="password" id="password" required/>
                </div>
                    <button className="btn btn-primary">Aceptar</button>
            </form> 
            <p className="center">¿No tienes cuenta? <Link to="/registro">Registrate</Link></p>
        </div>
    </div>
    )
}


export default Login;