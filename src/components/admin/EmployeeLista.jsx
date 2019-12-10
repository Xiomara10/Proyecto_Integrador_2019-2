import React from 'react'

const EmployeeLista = ({ idEmpleado, nombre, apellido, sexo, dni, correo, celular}) => {

    return(
        <tbody>
            <tr>
                <td scope="row">{ idEmpleado }</td>
                <td>{ nombre }</td>
                <td>{ apellido }</td>
                <td>{ sexo }</td>
                <td>{ dni }</td>
                <td>{ correo }</td>
                <td>{ celular }</td>
                <td><button type="button" className="btn btn-info" >Editar</button></td>
                <td><button type="button" className="btn btn-danger" >Eliminar</button></td>
            </tr>
        </tbody>
    )
}

export default EmployeeLista