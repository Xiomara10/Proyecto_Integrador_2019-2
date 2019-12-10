import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class ServiceList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            services: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8085/servicio', {method: 'get'})
        .then(respuesta => respuesta.json())
        .then( respuesta2 => {
            this.setState({
                services: respuesta2
            })
        })
    }

    removeService (idservicio) {
        console.log("idservicio: " + idservicio);
        fetch (`http://localhost:8085/servicio/${idservicio}`, {
          method: 'DELETE'})
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            let services = this.state.services.filter(c => c.idservicio !== idservicio);
            this.setState({ services });
            alert('Servicio eliminado');
          }
        });
    }

    editService(idservicio) {
        fetch('', {method: 'GET'})
    }

    ServiceLista = ({ idservicio, descripcion, fecha, hora, precio, idcliente, idempleado }) => {

        return(
            <tbody>
                <tr>
                    <td scope="row">{ idservicio }</td>
                    <td>{ descripcion }</td>
                    <td>{ fecha }</td>
                    <td>{ hora }</td>
                    <td>{ precio }</td>
                    <td>{ idcliente }</td>
                    <td>{ idempleado }</td>
                    <td><button type="button" className="btn btn-info">Editar</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={this.removeService.bind(this,idservicio)}>Eliminar</button></td>
                </tr>
            </tbody>
        )
    }

    render() {
        const {services} = this.state
        
        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Precio</th>
                    <th scope="col">IdCliente</th>
                    <th scope="col">IdEmpleado</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
                </thead>
                { services.map (emp => (
                    <this.ServiceLista 
                    key={emp.id} 
                    idservicio={emp.idservicio}
                    descripcion={emp.descripcion}
                    fecha={emp.fecha}
                    Hora={emp.hora}
                    precio={emp.precio}
                    idcliente={emp.idcliente}
                    idempleado={emp.idempleado}
                    />
                ))}
            </table>
        )
    }

}

export default ServiceList