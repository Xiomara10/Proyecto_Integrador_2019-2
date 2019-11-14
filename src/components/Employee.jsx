import React from 'react'

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
    }
]

const Employee = ({ match }) => {

    const currentEmployment = employee.filter(emp => emp.id === parseInt(match.params.id)) [0]

    return (
        <div className="ed-grid m-grid-3">
            <h1 className="m-cols-3">{currentEmployment.name}</h1>
            <img className="m-cols-1" src="../css/people1.jpg" alt="" />
            <div className="m-cols-2">
                <h4 >Información</h4>
                <p>{`Oficio: ${currentEmployment.employment}`}</p>
                <p >{`Distrito: ${currentEmployment.district}`}</p>
            </div>
            <div className="m-cols-2">
                <h3 >Descripción</h3>
                <p >{currentEmployment.description}</p>
            </div>
        </div>
    )
}

export default Employee