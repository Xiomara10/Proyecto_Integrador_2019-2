import React from 'react'
import {Route} from 'react-router-dom'

const Admin = ({component:Component, ...rest} ) => {
    return <Route {...rest} component={Component}/>
}

export default Admin