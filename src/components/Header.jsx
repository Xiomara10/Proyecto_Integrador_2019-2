import React, {createRef} from 'react'
import PrivateMenu from './molecules/PrivateMenu'
import PublicMenu from './molecules/PublicMenu'

const menu = createRef() 
const toggleMenu = () => menu.current.classList.toggle("show")

const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <h3>Servicios Domesticos</h3>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu" ref={menu}>
            { 
                localStorage.getItem('token') ?
                <PrivateMenu /> :
                <PublicMenu />                
            }

            </nav>
            <div  onClick={() => toggleMenu()} className="main-menu-toggle to-l">

            </div>
        </div>
    </div>
    </header>
)

export default Header