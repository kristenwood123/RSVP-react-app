import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthGlobal } from '../contexts/AuthContext'

const Login = () => {
const emailRef = useRef()
const passwordRef = useRef()
const { login } = useAuthGlobal()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

async function handleSubmit(e) {
  e.preventDefault()
  try {
    setError('')
    setLoading(true)
    await login(emailRef.current.value, passwordRef.current.value)
    
  } catch {
    setError('Failed to sign in')
  } 
  setLoading(false)
}

return (
    <>
    <section className='signUp'>  
       {error && <Alert variant='danger'>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Login</h1> 
           <div className='signup-section'>
          <label htmlFor="number">Email: </label>
          <input 
            type="email" 
            name='email'
            ref={emailRef}
            required />
        </div> 

        <div className='signup-section'>
          <label htmlFor="number">Password: </label>
          <input 
            type="password" 
            name='password'
            ref={passwordRef}
            required />
        </div>       
           <button type='submit' className='btn' disabled={loading}>Login</button>  
           </fieldset>  
      </form>
      <p>Need an account? <Link to='/signup'>Sign up</Link></p>
    </section>
  </>
  )
}

export default Login

