import React from 'react'
import { Link } from 'react-router-dom'
import {history} from '../index'

const Nav = () => {

  const logOut = () => {
    localStorage.removeItem('token')
    history.push('/')
  }
  return (
    <div className='App-header'>
      <section className='nav-flex'>
        <h1>Logo Here</h1>
        <div>
          <Link to='/register'><button>Register</button></Link>
          <Link to='/login'><button>Login</button></Link>
          <button onClick={logOut}>Logout</button>
        </div>
      </section>
    </div>
  )
}

export default Nav
