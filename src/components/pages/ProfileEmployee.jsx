import React from 'react'

import '../../css/employee.css'

class ProfileEmployee extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            employee:[]
        }
    }

    componentDidMount(idempleado){
        console.log("idempleado: " + idempleado);
        fetch(`http://localhost:8085/empleados/${idempleado}`, {method: 'get'})
        .then(respuesta => respuesta.json())
        .then( respuesta2 => {
            this.setState({
                employees: respuesta2
            })
        })
    }

    Employee = ({  nombre, imagen, idespecialidad, correo, DNI }) => {
    
        return (
            <div className="ed-grid m-grid-3 margin-employee">
                <h1 className="m-cols-3">{nombre}</h1>
                <img className="m-cols-1" src={imagen} alt="" />
                <div className="m-cols-2">
                    <h4 >Información</h4>
                    <p>{`Oficio: ${idespecialidad}`}</p>
                    <p >{`Distrito: ${DNI}`}</p>
                </div>
                <div className="m-cols-2">
                    <h3 >Contacto</h3>
                    <p >{correo}</p>
                </div>
            </div>
        )
    }

    render() {
        const {employee} = this.state
        
        return(
            <div>
        
                {employee.map (emp => (
                    <this.Employee
                    key={emp.id} 
                    idempleado={emp.idempleado}
                    nombre={emp.nombre}
                    imagen={emp.imagen}
                    apellido={emp.apellido}
                    dni={emp.dni}
                    correo={emp.correo}
                    />
                ))}
            </div>
        )
    }

}

export default ProfileEmployee