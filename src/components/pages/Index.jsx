import React from 'react'
import '../../css/index.css'

const Index = () => (
    <>
    <div class="main-banner img-container third-color" id="main-banner">
        <div class="ed-grid lg-grid-6">
            <div class="lg-cols-4 lg-x-2">
            <img class="main-banner__img" src="../img/backgrounjpg"/>
            <div class="main-banner__data s-center">
                <p class="t2 s-mb-0">Servicios domésticos</p>
                <p> Bienvenidos</p>
            </div>
            </div>
        </div>
    </div>
    <div>
        <div className="container margin">
            <h2>Propósito</h2>
            <p>Crear un sistema y una aplicación móvil dedicada a ofrecer servicios multifuncionales (arreglos, reparaciones e 
                instalaciones) para los hogares en varios sectores de Lima Metropolitana. Para esto contaremos con personas 
                especializadas en 3 rubros(carpintería, gastería y electricista)</p>
            <h2>Equipo de desarrollo</h2>
            <p>El equipo scrum trabaja con cada tarea que es asignada dependiendo del Sprint y de sus roles, Xiomara Torres trabaja la 
                parte del Frontend en la pagina web del proyecto, Lourdes Pampa trabaja la parte del Back-end en la pagina web del proyecto 
                y Brian Villanueva trabaja en la aplicacion movil del proyecto.</p> 
            <h2>Problemática</h2>                       
            <p>Actualmente, en Lima Metropolitana encontrar a trabajadores cuyos oficios estén relacionados al hogar, ya sean gasfiteros, 
                electricistas, albañiles, carpinteros, etc.; no es fácil y menos cuando lo necesitas en ese instante, ya que normalmente estos 
                trabajan independientemente y localizarlos no es sencillo. <br/>Los trabajadores que mayormente son más solicitados son  los electricistas, 
                gasfiteros y cerrajeros, puesto que están relacionados a las necesidades más primordiales, ya sea la energía eléctrica, el agua y las cerraduras.
            </p>
        </div>
    </div>
    </>
)

export default Index