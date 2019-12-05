import React from 'react'
import {NavLink} from 'react-router-dom'

const PublicMenu = () => {
    return (
        <ul>
            <li><NavLink to ="/" exact>Inicio</NavLink></li>    
            <li><NavLink to ="/trabajadores">Trabajadores</NavLink></li>    
            <li><NavLink to ="/login">Iniciar Sesión</NavLink></li>    
            <li><NavLink to ="/registro">Registrarse</NavLink></li>
        </ul>  
    )
}

export default PublicMenu