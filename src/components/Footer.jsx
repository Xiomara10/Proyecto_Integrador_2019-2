import React from 'react'
import {NavLink} from 'react-router-dom'

import '../css/footer.css'

const Footer = () => (
    <footer className="footer">
        <div className="content">
            <nav>
                <div>
                    <h4>Navegación</h4>
                    <ul>
                    <li><NavLink to ="/" >Inicio</NavLink></li>    
                    <li><NavLink to ="/trabajadores">Trabajadores</NavLink></li>    
                    <li><NavLink to ="/login">Iniciar Sesión</NavLink></li>    
                    <li><NavLink to ="/registro">Registrarse</NavLink></li>    
                    </ul>
                </div>
                <div>
                    <h4>Contactenos</h4>
                </div>
            </nav>
        </div>
    </footer>
)

export default Footer