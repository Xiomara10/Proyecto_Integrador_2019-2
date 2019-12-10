import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class EmployeeList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8085/administrador/empleados', {method: 'get'})
        .then(respuesta => respuesta.json())
        .then( respuesta2 => {
            this.setState({
                employees: respuesta2
            })
        })
    }

    removeEmployee (idempleado) {
        console.log("idempleado: " + idempleado);
        fetch (`http://localhost:8085/administrador/delete/${idempleado}`, {
          method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            let employees = this.state.employees.filter(c => c.idempleado !== idempleado);
            this.setState({ employees });
            alert('Empleado eliminado');
          }
        });
    }

    editEmployee(idEmpleado) {
        fetch('', {method: 'GET'})
    }

    EmployeeLista = ({ idempleado, nombre, apellido, sexo, dni, correo, celular}) => {

        return(
            <tbody>
                <tr>
                    <td scope="row">{ idempleado }</td>
                    <td>{ nombre }</td>
                    <td>{ apellido }</td>
                    <td>{ sexo }</td>
                    <td>{ dni }</td>
                    <td>{ correo }</td>
                    <td>{ celular }</td>
                    <td><button type="button" className="btn btn-info">Editar</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={this.removeEmployee.bind(this,idempleado)}>Eliminar</button></td>
                </tr>
            </tbody>
        )
    }

    render() {
        const {employees} = this.state
        
        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Género</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
                </thead>
                { employees.map (emp => (
                    <this.EmployeeLista
                    key={emp.id} 
                    idempleado={emp.idempleado}
                    nombre={emp.nombre}
                    apellido={emp.apellido}
                    sexo={emp.sexo}
                    dni={emp.dni}
                    correo={emp.correo}
                    celular={emp.celular}
                    />
                ))}
            </table>
        )
    }

}

export default EmployeeList