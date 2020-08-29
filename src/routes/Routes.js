import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'
import LandingPage from '../components/LandingPage'

const Routes = () => {

  return (
    <>
    <ProtectedRoute exact path='user-dash/:id' component={Dashboard}/>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
  </>
  )
}

export default Routes