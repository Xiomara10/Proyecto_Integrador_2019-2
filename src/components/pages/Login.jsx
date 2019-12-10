import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            correo: '',
            contraseña: ''
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        const form = e.target
    
        const data = {
            "correo": form.correo.value,
            "contraseña": form.contraseña.value
        }
    
        Axios.post('http://localhost:8085/auth/login', data)
        .then(r => {
            localStorage.setItem('token', r.data.token) 
            window.location = "/"
        })
        .catch(e => console.log(e.response))
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    // fetch('http://localhost:8085/auth/login', {method:'post', body: JSON.stringify(data), headers:{
    //     'Content-Type': 'application/json'}})
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));

    render (){

        const {correo, contraseña} = this.state

        return(
        <div className="ed-grid">
            <div className="l-block"></div>
            <div className="m-to-center m-60 lg-30">   
                <form className="login-form" method="POST" onSubmit={this.submitForm}> 
                    <h2 className="center">Iniciar Sesión</h2>
                    <div className="form__item">
                        <label>Email</label>
                        <input  type="email" name="correo" id="correo" value={correo} onChange={this.onChange} required/>      
                    </div>
                    <div className="form__item">
                        <label>Contraseña</label>
                        <input  type="password" name="contraseña" id="contraseña" value={contraseña} onChange={this.onChange} required/>
                    </div>
                        <button className="btn btn-primary">Aceptar</button>
                </form> 
                <p className="center">¿No tienes cuenta? <Link to="/registro">Registrate</Link></p>
            </div>
        </div>
        )
    }
}

export default Login;