import React from 'react'

const Register = () => {
  return (
    <div>
      <form className='register-form'>
        <input required type="text" placeholder="Name"/>
        <input required type="text" placeholder="UserName"/>
        <input required type="text" placeholder="Email"/>
        <input required type="text" placeholder="Password"/>
      </form>
    </div>
  )
}

export default Register
