import React from 'react'
import Login from './components/pages/Login'
import Registro from './components/pages/Registro'
import Employee from './components/pages/Employee'
import Menu from './components/Menu'
import Index from './components/pages/Index'
import CardGrid from './components/pages/CardGrid'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Protected from './components/routes/Protected'
import Public from './components/routes/Public'
import Page404 from './components/pages/Page404'

const App = () => (
  <Router> 
    <Menu />
    <Switch>
      <Public path="/" exact component={ Index }/>
      <Public path="/login" exact component={ Login } />
      <Public path="/registro" exact component={ Registro } />
      <Protected path="/trabajadores/:id" component={ Employee } />
      <Public path="/trabajadores" exact component={ CardGrid } />
      <Route component={ Page404 }/>
    </Switch>
    <Footer/>
  </Router>
)

export default App;
