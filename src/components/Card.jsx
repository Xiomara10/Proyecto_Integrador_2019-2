import React from 'react'
import {Link} from 'react-router-dom'
import '../css/card.css'

const Card = ({idempleado, src, apellido, correo}) => (
    <article className="card">
        <div className="row">
            <div className="icon">
                <img src={src}/>
            </div>     
            <div className="information">
                <p>{`Apellido: ${apellido}`}  <br/> {`Correo: ${correo}`} </p>
                <Link to={`/trabajadores/${idempleado}`}>Ver</Link>
            </div>
        </div>
    </article>
)

export default Card