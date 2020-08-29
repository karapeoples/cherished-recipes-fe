import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../redux/actions'

const Login = () => {
  const dispatch = useDispatch()
  const [creds, setCreds] = useState({
    username: '',
    password:''
  })

  const handleChange = (e) => {
			setCreds({
				...creds,
				[e.target.name]: e.target.value,
			})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
			dispatch(login(creds))
			setCreds({
				username: '',
				password: '',
			})
		}
  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <input name='username' value={creds.username} onChange={handleChange}type="text" placeholder="Username"/>
        <input name='password' value={creds.password} onChange={handleChange} type="text" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
