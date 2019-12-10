import React from 'react'
import Axios from 'axios';

class Registro extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            idempleado:'',
            nombre: '',
            apellido: '',
            correo: '',
            dni: '',
            celular: '',
            sexo: '',
            contraseña: '',
            idespecialidad:'',
        }

        this.save = this.save.bind(this);
    }

    save(e){
        e.preventDefault();
        const form = e.target

        const data = {
            "idempleado": form.idempleado.value,
            "nombre": form.nombre.value,
            "apellido": form.apellido.value ,
            "correo": form.correo.value,
            "dni": form.dni.value,
            "celular": form.celular.value,
            "sexo": form.sexo.value,
            "contraseña": form.contraseña.value,
            "idespecialidad": form.idespecialidad.value
        }

        Axios.post('http://localhost:8085/administrador/empleado/create', data)
        .then(r => {
            localStorage.setItem('token', r.data.token) 
            window.location = "/admin/trabajadores"
        })
        .catch(e => console.log(e.response))

    }

    render(){
        return(
        <div className="ed-grid">
            <div className="l-block"></div>
                <form method="POST" className="register-form" onSubmit={this.save.bind(this)}>
                <h2>Registrars empleado</h2>
                    <div className="form__item">
                    <label>Id </label>
                    <input type="text" name="idempleado" id="idempleado" 
                        className="form-control" required/>
                    </div>
                    <div className="form__item">
                    <label>Nombre </label>
                    <input type="text" name="nombre" id="nombre" 
                        className="form-control" required/>
                    </div>
                    <div className="form__item">
                    <label >Apellido</label>
                    <input type="text" name="apellido" id="apellido" 
                        className="form-control" required/>
                    </div>
                    <div className="form__item">
                    <label>Email </label>
                    <input type="email" name="correo" id="correo" className="form-control" required/>      
                    </div>
                    <div className="form__item">
                    <label>DNI </label>
                    <input type="text" name="dni" id="dni" 
                        className="form-control" required/>      
                    </div>
                    <div className="form__item">
                    <label>Celular </label>
                    <input type="text" name="celular" id="celular" 
                        className="form-control" required/>      
                    </div>
                    <div className="form__item">
                        <label>Género</label>
                        <input type="text" name="sexo" id="sexo" className="form-control" required />
                    </div>
                    <div className="form__item">
                    <label>Contraseña </label>
                    <input type="password" name="contraseña" id="contraseña"
                        className="form-control" required/>
                    </div>
                    <div className="form__item">
                    <label>idEspecialidad </label>
                    <input type="text" name="idespecialidad" id="idespecialidad" 
                        className="form-control" required/>    
                    </div>
                    <div>
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            <div className="l-block"></div>
        </div>
        )
    }
}

export default Registro