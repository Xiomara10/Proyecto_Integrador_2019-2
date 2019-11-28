import React from 'react'
import ReactDOM from 'react-dom'
import './css/Registro.css'

class RegistroEmpleado extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
            lastname: '',
            genero: '',
            dni:'',
            direccion: '',
            email: '',
            contraseña: '',
            contraseña2: '',
        }
    }

    save(event){
        event.preventDefault();
        this.props.history.push('/login')
    }

    render(){
        return(
            <div className="container" id="contenedor">
                <form method="POST" className="register-form" onSubmit={this.save.bind(this)}>
                    <h2>Registrarse</h2>
                <div className="row"> 
                    <div className="col">
                        <div className="form-group"> 
                        <label>Nombres </label>
                        <input type="text" name="name" id="name" 
                            className="form-control"/>
                        </div>
                        <div className="form-group"> 
                        <label >Apellidos </label>
                        <input type="text" name="lastname" id="lastname" 
                            className="form-control"/>
                        </div>
                            <label>Genero</label>
                            <div className="form-check"> 
                                <input className="form-check-input" type="radio" name="genero" value="f"/>
                                <label className="form-check-label">Femenino </label>
                            </div>
                            <div className="form-check"> 
                                <input className="form-check-input" type="radio" name="genero" value="m"/>
                                <label className="form-check-label">Masculino </label>
                        </div>
                        <div className="form-group"> 
                        <label>DNI </label>
                        <input type="text" name="dni" id="dni" 
                            className="form-control"/>      
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group"> 
                        <label>Email </label>
                        <input type="email" name="email" id="email" className="form-control"/>      
                        </div>
                        <div className="form-group"> 
                        <label>Contraseña </label>
                        <input type="password" name="contraseña" id="contraseña"
                            className="form-control"/>
                        </div>
                        <label>Repetir contraseña </label>
                        <input type="password" name="contraseña2" id="contraseña2"
                            className="form-control"/>
                    </div>
                </div>
                    <div className="form-group"> 
                    <label>Dirección </label>
                    <input type="text" name="direccion" id="direccion" 
                        className="form-control"/>    
                </div>
                    <div className="form-check"> 
                        <input type="checkbox" name="aceptar"  className="form-check-input"/> 
                        Aceptar terminos y condiciones
                    </div>
                    <div>
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistroEmpleado;