import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuthGlobal } from '../contexts/AuthContext'
import { LoginForm } from '../styles/LoginStyles'

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuthGlobal()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

async function handleSubmit(e) {
  e.preventDefault()
  try {
    setError('')
    setLoading(true)
    await login(emailRef.current.value, passwordRef.current.value)
    history.push('/List')
  } catch {
    setError('Failed to sign in')
  } 
  setLoading(false)
}

return (
    <>
    <section className='signUp'>  
       {error && <Alert variant='danger'>{error}</Alert>}
      <LoginForm onSubmit={handleSubmit}>
        <div className='login-wrapper'>
        <h1 style={{marginBottom:'1rem'}}>Login</h1> 
           <div className='signup-section'>
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            name='email'
            ref={emailRef}
            required />
        </div> 

        <div className='signup-section'>
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            name='password'
            ref={passwordRef}
            required />
        </div>     
           <button type='submit' className='btn' disabled={loading}>Login!</button>  
           </div>  
      </LoginForm>
      <p style={{marginTop: '1rem'}}>Need to create an account? <Link to='/signup' style={{textDecoration:'none', color: '#000'}}>Sign Up</Link></p>
    </section>
  </>
  )
}

export default Login

