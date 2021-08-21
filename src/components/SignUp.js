import React from 'react'
import Modal from './Modal'
// import { useAuthGlobal } from '../contexts/AuthContext'

const SignUp = () => {

function handleSubmit(e) {
  e.preventDefault()
  console.log('helloo')
}

  return (
    <>
    <section className='signUp'>  
       {/* <p>{state.isModalOpen && <Modal />}</p>   */}
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Sign Up</h1> 
           <div className='signup-section'>
          <label htmlFor="number">Email: </label>
          <input 
            type="email" 
            name='email'
            required />
        </div> 

        <div className='signup-section'>
          <label htmlFor="number">Password: </label>
          <input 
            type="password" 
            name='password'
            required />
        </div>       
           <button type='submit' className='btn'>Sign Up!</button>  
           </fieldset>  
      </form>
      <p>Already have an account? Log in</p>
    </section>
  </>
  )
}

export default SignUp
