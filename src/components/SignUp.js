import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import Modal from './Modal'

import { useAuthGlobal } from '../contexts/AuthContext'

const SignUp = () => {
const emailRef = useRef()
const passwordRef = useRef()
const { signupUser } = useAuthGlobal()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

async function handleSubmit(e) {
  e.preventDefault()
  try {
    setError('')
    setLoading(true)
    await signupUser(emailRef.current.value, passwordRef.current.value)
    
  } catch {
    setError('Failed to create an account')
  } 
  setLoading(false)
}

return (
    <>
    <section className='signUp'>  
       {/* <p>{state.isModalOpen && <Modal />}</p>   */}
       {currentUser.email}
       {error && <Alert variant='danger'>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Sign Up</h1> 
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
           <button type='submit' className='btn' disabled={loading}>Sign Up!</button>  
           </fieldset>  
      </form>
      <p>Already have an account? Log in</p>
    </section>
  </>
  )
}

export default SignUp
