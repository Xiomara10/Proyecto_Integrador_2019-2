import React from 'react'
import {NavLink} from 'react-router-dom'

const AdminHeader = () => {
    return(
        <nav>
            <ul>
            <li><NavLink to="/admin/empleados">Empleados</NavLink></li>
            <li><NavLink to="/admin/clientes">Clientes</NavLink></li>
            <li><NavLink to="/admin/servicios">Servicios</NavLink></li>
            </ul>
        </nav>

    )
}

export default AdminHeader