import React from 'react'
import Card from './components/Card'
const employee = [
    {
        "id": 1,
        "src": "../img/people1.jpg",
        "name": "Juanito Carpio",
        "district": "San Miguel",
        "employment": "Carpintero",
        "description": "--------------------------------------------",
        "url": "perfil"
    },
    {
        "id": 2,
        "src": "../img/people1.jpg",
        "name": "Rosa Tucno",
        "district": "Ate-Vitarte",
        "employment": "Electricista",
        "description": "--------------------------------------------",
        "url": "perfil"
    },
    {
        "id": 3,
        "src": "../img/people1.jpg",
        "name": "José Turpo",
        "district": "San Miguel",
        "employment": "Carpintero",
        "description": "--------------------------------------------",
        "url": "perfil"
    },
    {
        "id": 4,
        "src": "../img/people1.jpg",
        "name": "Gustavo Olivares",
        "district": "San Isidro",
        "employment": "Gásfitero",
        "description": "--------------------------------------------",
        "url": "perfil"
    }
]

const CardGrid= () => (
    <div className="ed-grid m-grid-3">
        { employee.map (emp => (
           <Card
            key={emp.id} 
            id={emp.id}
            src={emp.src}
            name={emp.name}
            district={emp.district}
            employment={emp.employment}
            url={emp.url}
            />
        ))}
    </div>
)

export default CardGrid