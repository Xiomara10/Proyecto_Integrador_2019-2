import React from 'react'
import Axios from 'axios';


class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            contraseña: ''
        }
    }

    submitForm(e){
        e.preventDefault();
        const form = e.target
        //this.props.history.push('/')  direccionar al home

        const data = {
            "email": form.email.value,
            "password": form.password.value
        }

        Axios.post('https://direccion-de-la-api', data)
        .then(r => {localStorage.setItem('token', r.data.token) 
                    window.location = "/"})
        .catch(e => console.log(e))

    }


    render(){
        return(
        <div className="ed-grid">
            <div className="l-block"></div>
            <div className="m-to-center m-60 lg-30">   
                <form className="login-form" method="POST" onSubmit={this.submitForm.bind(this)}> 
                    <h2 className="center">Iniciar Sesión</h2>
                    <div className="form__item">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" id="email" required/>      
                    </div>
                    <div className="form__item">
                        <label>Contraseña</label>
                        <input className="form-control" type="password" name="contraseña" id="contraseña" required/>
                    </div>
                        <button className="btn btn-primary">Aceptar</button>
                </form> 
            </div>
        </div>
        )
    }
}

export default Login;