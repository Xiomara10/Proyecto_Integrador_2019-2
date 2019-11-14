import React from 'react'
import {Link} from 'react-router-dom'
import '../css/card.css'

const Card = ({id, src, name, district, employment, url}) => (
    <article className="card">
        <div className="row">
            <div className="icon">
                <img src={src}/>
            </div>     
            <div className="information">
                <span className="name">{name}</span>
                <p>{`Distrito: ${district}`}  <br/> {`Ocupación: ${employment}`} </p>
                <Link to={`/trabajadores/${id}`}>Ver</Link>
            </div>
        </div>
    </article>
)

export default Card