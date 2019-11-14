import React from 'react'
import './css/login.css'   

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            contraseña: ''
        }
    }

    render(){
        return(
            <div className="login-page" id="contenedor">   
                <form className="login-form">
                <h3>Iniciar Sesión</h3>
                <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" name="email" id="email" 
                    />      
                </div>
                <div className="form-group">
                <label>Contraseña</label>
                <input className="form-control" type="password" name="contraseña" id="contraseña"/>
                </div>
                <button className="btn btn-primary"  > Aceptar</button>
                </form> 
            </div>
        )
    }
}

export default Login;