import React from 'react'
import Card from './Card'

import '../css/employee.css'

const employee = [
    {
        "id": 1,
        "src": "../img/people1.jpg",
        "name": "Juanito Carpio",
        "district": "San Miguel",
        "employment": "Carpintero",
        "description": "Amplia experiencia en todas las labores de carpintería de madera en general, incluyendo la instalación de estructuras de madera, la fabricación de muebles a medida y el montaje de elementos de carpintería en inmuebles y viviendas. Interpretación de planos, manejo de toda la maquinaria de carpintería y conocimientos sobre restauración de muebles antiguos.",
        "url": "perfil"
    },
    {
        "id": 2,
        "src": "../img/people1.jpg",
        "name": "Rosa Tucno",
        "district": "Ate-Vitarte",
        "employment": "Electricista",
        "description": "Ingeniero y electricista con conocimiento profundo de los sistemas eléctricos de las instalaciones de energía y grandes equipos. Disponibilidad completa con horario flexible, incluyendo emergencias puntuales y fines de semana. Capacidad para funcionar como autónomo o bien como miembro de todo un equipo",
        "url": "perfil"
    },
    {
        "id": 3,
        "src": "../img/people1.jpg",
        "name": "José Turpo",
        "district": "San Miguel",
        "employment": "Carpintero",
        "description": "Carpintero de acabado con notable experiencia y talento, capacitado para trabajar siguiendo los métodos de diferentes sociedades. Especializado en viviendas residenciales así como en la fabricación de muebles.",
        "url": "perfil"
    },
    {
        "id": 4,
        "src": "../img/people1.jpg",
        "name": "Gustavo Olivares",
        "district": "San Isidro",
        "employment": "Gásfitero",
        "description": "Gásfitero certificado, acostumbrado a trabajar en grandes equipos y con complejos sistemas de tuberías. Trabajador dedicado para definir la realización de los proyectos, trabajando duro. Extensos conocimientos de las regulaciones legales de seguridad y controles de calidad.",
        "url": "perfil"
    },
    {
        "id": 5,
        "src": "../img/people1.jpg",
        "name": "Rocío Jiménez",
        "district": "San Isidro",
        "employment": "Electricista",
        "description": "Electricista certificado, acostumbrado a trabajar en grandes equipos y con complejos sistemas de tuberías. Trabajador dedicado para definir la realización de los proyectos, trabajando duro. Extensos conocimientos de las regulaciones legales de seguridad y controles de calidad.",
        "url": "perfil"
    },
    {
        "id": 6,
        "src": "../img/people1.jpg",
        "name": "Miguel Mancilla",
        "district": "San Luis",
        "employment": "Gásfitero",
        "description": "Gásfitero certificado, acostumbrado a trabajar en grandes equipos y con complejos sistemas de tuberías. Trabajador dedicado para definir la realización de los proyectos, trabajando duro. Extensos conocimientos de las regulaciones legales de seguridad y controles de calidad.",
        "url": "perfil"
    },
    {
        "id": 7,
        "src": "../img/people1.jpg",
        "name": "Jack Ubaldo",
        "district": "La Victoria",
        "employment": "Carpintero",
        "description": "Carpintero certificado, acostumbrado a trabajar en grandes equipos y con complejos sistemas de tuberías. Trabajador dedicado para definir la realización de los proyectos, trabajando duro. Extensos conocimientos de las regulaciones legales de seguridad y controles de calidad.",
        "url": "perfil"
    },
    {
        "id": 8,
        "src": "../img/people1.jpg",
        "name": "Antonio Borges",
        "district": "Rimac",
        "employment": "Carpintero",
        "description": "Amplia experiencia en todas las labores de carpintería de madera en general, incluyendo la instalación de estructuras de madera, la fabricación de muebles a medida y el montaje de elementos de carpintería en inmuebles y viviendas. Interpretación de planos, manejo de toda la maquinaria de carpintería y conocimientos sobre restauración de muebles antiguos.",
        "url": "perfil"
    }
]


const CardGrid= () => (
    <div className="ed-grid m-grid-3 margin-employee">
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