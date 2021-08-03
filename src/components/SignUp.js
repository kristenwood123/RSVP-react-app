import React from 'react'
import Modal from './Modal'
import { useGlobalContext } from '../contexts/context'

const SignUp = () => {
const { inputValues, handleOnChange, handleSubmit, state} = useGlobalContext()

  return (
    <>
    <section className='signUp'>  
       <p>{state.isModalOpen && <Modal />}</p>  
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1> 
        <fieldset>
           <div className='signup-section'>
          <label htmlFor="number">Email: </label>
          <input 
            type="email" 
            id='email' 
            name='email'
            value={inputValues.email}
            onChange={handleOnChange}
            required />
        </div> 

        <div className='signup-section'>
          <label htmlFor="number">Password: </label>
          <input 
            type="password" 
            id='password' 
            name='password'
            value={inputValues.password}
            onChange={handleOnChange}
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
