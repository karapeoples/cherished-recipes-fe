import React, { useState } from 'react'
import Nav from './Nav'
import { useDispatch } from 'react-redux'
import {postNewUser} from '../redux/actions'

const Register = () => {
  const dispatch = useDispatch();
  const userObj = {
    name: '',
    username: '',
    email: '',
    password: ''
  }
  const [user, setUser] = useState(userObj)

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(postNewUser(user))
    setUser(userObj)
  }

  return (
    <div>
      <Nav/>
				<form className='register-form' onSubmit={handleSubmit}>
					<input required name='name' value={user.name} type='text' placeholder='Name' onChange={handleChange} />
					<input required name='username' value={user.username} type='text' placeholder='UserName' onChange={handleChange} />
					<input required name='email' value={user.email} type='text' placeholder='Email' onChange={handleChange} />
        <input required name='password' value={user.password} type='text' placeholder='Password' onChange={handleChange} />
        <button type='submit'>Register</button>
				</form>
			</div>
		)
}

export default Register
