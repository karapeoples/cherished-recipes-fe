import React from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from '../utils/ProtectedRoute'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'
import Login from '../components/Login'
import LandingPage from '../components/LandingPage'
import AddRecipe from '../components/AddRecipe'

const Routes = () => {

  return (
    <>
      <ProtectedRoute path='/user-dash/:id' component={Dashboard} />
      <ProtectedRoute path ='/addRecipe' component={AddRecipe}/>
    <Route exact path='/' component={LandingPage} />
    <Route  path='/register' component={Register} />
    <Route  path='/login' component={Login} />
  </>
  )
}

export default Routes