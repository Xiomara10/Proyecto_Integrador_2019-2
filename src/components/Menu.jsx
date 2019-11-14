import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <h3>Servicios Domesticos</h3>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
                <ul>
                    <li><NavLink to ="/">Inicio</NavLink></li>    
                    <li><NavLink to ="/trabajadores">Trabajadores</NavLink></li>    
                    <li><NavLink to ="/login">Iniciar Sesión</NavLink></li>    
                    <li><NavLink to ="/registro">Registrarse</NavLink></li>    
                </ul>    
            </nav>
        </div>
    </div>
    </header>
)

export default Menu