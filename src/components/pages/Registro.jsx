import React from 'react'
import ReactDOM from 'react-dom'
import '../../css/Registro.css'
import Axios from 'axios'

class Registro extends React.Component{
    
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

    save(e){
        e.preventDefault();
        const form = e.target
        //this.props.history.push('/login')

        const data = {
            "name": form.name.value,
            "lastname": form.lastname.value ,
            "genero": form.genero.value,
            "dni":form.dni.value,
            "direccion": form.direccion.value,
            "email": form.direccion.value,
            "contraseña": form.contraseña.value 
        }

        Axios.post('', data)
            .then(() => {
                alert("Usuario registrado")
                window.location = "/login"})
            .catch(() => alert("Error al crear usuario"))

    }

    render(){
        return(
        <div className="ed-grid">
            <div className="l-block"></div>
            <div className="m-to-center m-80 lg-50"> 
                <form method="POST" className="register-form" onSubmit={this.save.bind(this)}>
                <h2>Registrarse</h2>
                <div className="row"> 
                    <div className="col">
                        <div className="form__item">
                        <label>Nombres </label>
                        <input type="text" name="name" id="name" 
                            className="form-control" required/>
                        </div>
                        <div className="form__item">
                        <label >Apellidos </label>
                        <input type="text" name="lastname" id="lastname" 
                            className="form-control" required/>
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
                        <div className="form__item">
                        <label>DNI </label>
                        <input type="text" name="dni" id="dni" 
                            className="form-control" required/>      
                        </div>
                    </div>

                    <div className="col">
                        <div className="form__item">
                        <label>Email </label>
                        <input type="email" name="email" id="email" className="form-control" required/>      
                        </div>
                        <div className="form__item">
                        <label>Contraseña </label>
                        <input type="password" name="contraseña" id="contraseña"
                            className="form-control" required/>
                        </div>
                        <label>Repetir contraseña </label>
                        <input type="password" name="contraseña2" id="contraseña2"
                            className="form-control" required/>
                    </div>
                </div>
                    <div className="form__item">
                    <label>Dirección </label>
                    <input type="text" name="direccion" id="direccion" 
                        className="form-control" required/>    
                    </div>
                    <div className="form-check"> 
                        <input type="checkbox" name="aceptar"  className="form-check-input" required/> 
                        Aceptar terminos y condiciones
                    </div>
                    <div>
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
            <div className="l-block"></div>
        </div>
        )
    }
}

export default Registro;