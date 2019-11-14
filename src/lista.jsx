import React from 'react'
import ReactDOM from 'react-dom'
import './css/lista.css'
class Lista extends React.Component{

    constructor(args){
        super(args)
        this.state = {
            img: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div class = "lista-page" id="lista">
                <h1>Oficios</h1>
                <div class="container">
                    <div class="card">
                        <h3>Carpintero</h3>
                        <img class="profesion" src="img/carpenter.jpg"/>
                    </div>
                    <div class="card">
                        <h3>Electricista</h3>
                        <img class="profesion" src="img/electrical.jpg"/>
                    </div>
                    <div class="card">
                        <h3>Gasfitero</h3>
                        <img class="profesion" src="img/plumber.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lista;

