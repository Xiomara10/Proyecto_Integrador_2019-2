import React from 'react'
import Login from './components/pages/Login'
import Registro from './components/pages/Registro'
import Employee from './components/pages/ProfileEmployee'
import Header from './components/Header'
import Index from './components/pages/Index'
import CardGrid from './components/pages/Employees'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Protected from './components/routes/Protected'
import Public from './components/routes/Public'
import Page404 from './components/pages/Page404'
import Admin from './components/routes/Admin'
import AdminHome from './components/admin/AdminHome'
import EmployeesList from './components/admin/EmployeeList'
import EmployeeForm from './components/admin/EmployeeForm'
import CuestomerList from './components/admin/CustromerList'
import ServiceList from './components/admin/ServiceList'


const App = () => (
  <Router> 
    <Header />
    <Switch>
      <Route path="/" exact component={ Index }/>
      <Public path="/login" exact component={ Login } />
      <Public path="/registro" exact component={ Registro } />
      <Protected path="/trabajadores/:id" component={ Employee } />
      <Route path="/trabajadores" exact component={ CardGrid } />
      //rutas del admin
      <Admin path="/admin" exact component={AdminHome}/>
      <Admin path="/admin/trabajadores" exact component={ EmployeesList }/>
      <Admin path="/admin/trabajadores/form/:id" component={ EmployeeForm }/>
      <Admin path="/admin/trabajadores/form" exact component={ EmployeeForm }/>
      <Admin path="/admin/clientes" exact component={ CuestomerList }/>
      <Admin path="/admin/servicios" exact component={ ServiceList }/>
      <Route component={ Page404 }/>
    </Switch>
    <Footer/>
  </Router>
)

export default App;
