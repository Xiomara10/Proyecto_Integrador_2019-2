import React from 'react'
import Login from './Login'
import RegistroEmpleados from './RegistroEmpleado'
import Employee from './components/Employee'
import Menu from './components/Menu'
import Banner from './components/Banner'
import CardGrid from './components/CardGrid'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => (
  <Router> 
    <Menu />
    <Switch>
      <Route path="/" exact component={ Banner }/>
      <Route path="/login" component={ Login } />
      <Route path="/registro" component={ RegistroEmpleados } />
      <PrivaRoute path="/trabajadores/:id" component={ Employee } />
      <Route path="/trabajadores" component={ CardGrid } />
      <Route component={() => (
        <div>
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )}/>
    </Switch>
    <Footer/>
  </Router>
)

export default App;
