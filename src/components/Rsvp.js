import React from 'react'
import Modal from './Modal'
import { useGlobalContext } from '../contexts/context'
import { collection } from 'firebase/firestore'
import { RsvpForm } from '../styles/'

const Rsvp = () => {
const { inputValues, handleOnChange, handleSubmit, state} = useGlobalContext()

  return (
    <>
    <section className='Rsvp'> 
      <legend><h1>Login</h1></legend>  
       <p>{state.isModalOpen && <Modal />}</p>  
      <form onSubmit={handleSubmit}>
        <fieldset>
        <div className='rsvp-section'>
          <label htmlFor="firstName">First Name: </label>
          <input type="text"
            placeholder='Required'
            id='firstName'
            name='firstName' 
            value={inputValues.firstName} 
            onChange={handleOnChange}
            required />
        </div>

        <div className='rsvp-section'>
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text"
            placeholder='Required' 
            id='lastName'
            name='lastName' 
            value={inputValues.lastName}  
            onChange={handleOnChange}
            required />
        </div>

           <div className='rsvp-section'>
          <label htmlFor="number">Email: </label>
          <input 
            type="email" 
            id='email' 
            name='email'
            placeholder='Required' 
            value={inputValues.email}
            onChange={handleOnChange}
            required />
        </div> 

        <div className='rsvp-section'>
          <label htmlFor="number">Phone Number: </label>
          <input 
            type="tel" 
            id='number' 
            name='number'
            placeholder='123-456-7890' 
            value={inputValues.number}
            onChange={handleOnChange}
            required />
        </div>       
           <button type='submit' className='btn'>Let's Party!</button>    
        </fieldset>
      </form>
    </section>
  </>
  )
}

export default Rsvp
