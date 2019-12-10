import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class CustomerList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            customer: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8085/administrador/clientes', {method: 'get'})
        .then(respuesta => respuesta.json())
        .then( respuesta2 => {
            this.setState({
                employees: respuesta2
            })
        })
    }

    removeEmployee (idcliente) {
        console.log("idcliente: " + idcliente);
        fetch (`http://localhost:8085/administrador/delete/${idcliente}`, {
          method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            let customer = this.state.employees.filter(c => c.idcliente !== idcliente);
            this.setState({ customer });
            alert('Empleado eliminado');
          }
        });
    }

    editEmployee(idEmpleado) {
        fetch('', {method: 'GET'})
    }

    CustomerLista = ({ idcliente, nombre, apellido, correo, dni, direccion, celular, sexo}) => {

        return(
            <tbody>
                <tr>
                    <td scope="row">{ idcliente }</td>
                    <td>{ nombre }</td>
                    <td>{ apellido }</td>
                    <td>{ correo }</td>
                    <td>{ dni }</td>
                    <td>{ direccion }</td>
                    <td>{ celular }</td>
                    <td>{ sexo }</td>
                    <td><button type="button" className="btn btn-info">Editar</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={this.removeCustomer.bind(this,idcliente)}>Eliminar</button></td>
                </tr>
            </tbody>
        )
    }

    render() {
        const {customers} = this.state
        
        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">DNI</th>
                    <th scope="col">dirección</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Género</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
                </thead>
                { customers.map (emp => (
                    <this.CustomerLista
                    key={emp.id} 
                    idcliente={emp.idcliente}
                    nombre={emp.nombre}
                    apellido={emp.apellido}
                    correo={emp.correo}
                    dni={emp.dni}
                    direccion={emp.direccion}
                    celular={emp.celular}
                    sexo={emp.sexo}
                    />
                ))}
            </table>
        )
    }

}

export default CustomerList