import React from 'react'
import ReactDOM from 'react-dom'
import '../../css/Registro.css'
import Axios from 'axios'

class Registro extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            apellido: '',
            correo: '',
            dni:'',
            direccion: '',
            celular: '',
            sexo: '',
            contraseña: '',
        }
    }

    save(e){
        e.preventDefault();
        const form = e.target
        //this.props.history.push('/login')

        const data = {
            "nombre": form.nombre.value,
            "apellido": form.apellido.value ,
            "correo": form.correo.value,
            "dni":form.dni.value,
            "direccion": form.direccion.value,
            "genero": form.genero.value,
            "celular": form.celular.value,
            "sexo": form.sexo.value,
            "contraseña": form.contraseña.value,
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
                        <input type="text" name="nombre" id="nombre" 
                            className="form-control" required/>
                        </div>
                        <div className="form__item">
                        <label >Apellido </label>
                        <input type="text" name="apellido" id="apellido" 
                            className="form-control" required/>
                        </div>
                        <div className="form__item">
                        <label>Género</label>
                        <input type="text" name="sexo" id="sexo" className="form-control" required />
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
                        <input type="email" name="correo" id="correo" className="form-control" required/>      
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