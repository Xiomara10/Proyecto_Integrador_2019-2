import React from 'react'
import {NavLink} from 'react-router-dom'

const removeToken = () => {
    localStorage.removeItem('token')
    window.location = "/"
}

const PrivateMenu = () => {
    return(
        <ul>
            <li><NavLink to ="/" exact>Inicio</NavLink></li>    
            <li><NavLink to ="/trabajadores">Trabajadores</NavLink></li>    
            <li><span onClick={() => removeToken()}>Cerrar Sesión</span></li> 
        </ul>  
    )
}

export default PrivateMenu