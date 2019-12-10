import React from 'react'
import EmployeeLista from './EmployeeLista'
import 'bootstrap/dist/css/bootstrap.css'

class EmployeeList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8085/empleados', {method: 'get'})
        .then(respuesta => respuesta.json())
        .then( respuesta2 => {
            this.setState({
                employees: respuesta2
            })
        })
    }

    removeEmployee (idEmpleado) {
        fetch (`http://localhost:3000/${idEmpleado}`, {
          method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            let employees = this.state.employees.filter(c => c.idEmpleado !== idEmpleado);
            this.setState({ employees });
            alert('Empleado eliminado');
          }
        });
    }

    editEmployee(idEmpleado) {
        fetch('', {method: 'GET'})
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
                    <EmployeeLista
                    key={emp.id} 
                    idEmpleado={emp.idEmpleado}
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