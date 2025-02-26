import React from 'react'
import "./style.css"

function SingUp() {
  return (
    <div className='singupf'>
        <h1>SingUp </h1>
        <input type='text' placeholder='UserName '/>
        <input type='email' placeholder='Enter Email'/>
        <input type='password' placeholder='Enteer Your Password'/>
        <button type='submit'>Sing Up</button>
    </div>
  )
}

export default SingUp