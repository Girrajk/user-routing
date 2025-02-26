import React from 'react'
import "./style.css"


function Login() {
  return (
    <div className='loginf'>
        <h1>Login </h1> 
        <input type='email' placeholder='Enter Email'/>
        <input type='password' placeholder='Password'/>
        <button type='submit'>Login</button>
    </div>
  )
}

export default Login