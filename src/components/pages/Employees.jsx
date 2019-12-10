import React, { Component } from 'react'
import Card from '../Card'
import '../../css/employee.css'

class Employees extends Component {

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

    /*
    componentDidMount(){
        axios.get('https://localhost:8085/empleados')
        .then( response => console.log(response))
    }
    */

    render() {
        const {employees} = this.state
        return(
            <div className="ed-grid">
                <div className="ed-grid m-grid-3 margin-employee">
                { employees.map (emp => (
                    <Card
                    key={emp.id} 
                    idEmpleado={emp.idEmpleado}
                    src={emp.src}
                    apellido={emp.apellido}
                    correo={emp.correo}
                    />
                ))}
                </div>
            </div>
        )
    }

}
export default Employees