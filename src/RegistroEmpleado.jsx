import React from 'react'
import ReactDOM from 'react-dom'
import './css/Registro.css'

class RegistroEmpleado extends React.Component{
    
    constructor(args){
        super(args)
        this.state = {
            name: '',
            lastname: '',
            genero: '',
            dni:'',
            direccion: '',
            cargo:'',
            email: '',
            contraseña: '',
            contraseña2: '',
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    save(s){
        this.setState({
            message: 'Registrado correctamente'
        })
    }

    render(){
        return(
            <div class="container" id="contenedor">
                <form class="register-form">
                    <h2>Registro de Empleado</h2>
                <div class="row"> 
                    <div class="col">
                        <div class="form-group"> 
                        <label>Nombres </label>
                        <input type="text" name="name" id="name" 
                            class="form-control"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}/>
                        </div>
                        <div class="form-group"> 
                        <label >Apellidos </label>
                        <input type="text" name="lastname" id="lastname" 
                            class="form-control"
                            value={this.state.lastname}
                            onChange={this.onChange.bind(this)}/>
                        </div>
                            <label>Genero</label>
                            <div class="form-check"> 
                                <input class="form-check-input" type="radio" name="genero" value="f"/>
                                <label class="form-check-label">Femenino </label>
                            </div>
                            <div class="form-check"> 
                                <input class="form-check-input" type="radio" name="genero" value="m"/>
                                <label class="form-check-label">Masculino </label>
                        </div>
                        <div class="form-group"> 
                        <label>DNI </label>
                        <input type="text" name="dni" id="dni" 
                            class="form-control"
                            value={this.state.dni}
                            onChange={this.onChange.bind(this)}/>      
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group"> 
                        <label>Cargo </label>
                        <select class="custom-select mr-sm-2" id="cargo" name="cargo" 
                            value={this.state.cargo} onChange={this.onChange.bind(this)}>
                                <option value="">Seleccione</option>
                                <option value="electricista">Electricista</option>
                                <option value="carpintero">Carpintero</option>
                                <option value="gafitero">Gásfitero</option>
                        </select>
                        </div>
                        <div class="form-group"> 
                        <label>Email </label>
                        <input type="email" name="email" id="email" 
                            class="form-control"
                            value={this.state.email}
                            onChange={this.onChange.bind(this)}/>      
                        </div>
                        <div class="form-group"> 
                        <label>Contraseña </label>
                        <input type="password" name="contraseña" id="contraseña"
                            class="form-control"
                            value={this.state.contraseña}
                            onChange={this.onChange.bind(this)}/>
                        </div>
                        <label>Repetir contraseña </label>
                        <input type="password" name="contraseña2" id="contraseña2"
                            class="form-control"
                            value={this.state.contraseña2}
                            onChange={this.onChange.bind(this)}/>
                    </div>
                </div>
                    <div class="form-group"> 
                    <label>Dirección </label>
                    <input type="text" name="direccion" id="direccion" 
                        class="form-control"
                        value={this.state.direccion}
                        onChange={this.onChange.bind(this)}/>    
                   
                </div>
                    <div class="form-check"> 
                        <input type="checkbox" name="aceptar"  class="form-check-input"
                        value={this.state.aceptar} onChange={this.onChange.bind(this)}/> 
                        Aceptar terminos y condiciones
                    </div>
                    <div>
                        <button class="btn btn-primary" onClick={this.save.bind(this)} >Guardar</button>
                        <span>{this.state.message}</span>
                    </div>

                </form>
            </div>
        )
    }
}

export default RegistroEmpleado;