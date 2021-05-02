import React from 'react'
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { GiHealthCapsule } from 'react-icons/gi';

import Modal from './Modal'
import { useGlobalContext } from '../context'

const Rsvp = () => {
const { inputValues, handleOnChange, handleSubmit, state} = useGlobalContext()

  return (
    <>
    <section className='Rsvp'> 
      <legend><h1>Please RSVP</h1></legend>  
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
      </fieldset>
      <fieldset>
        <div className="rsvp-additions">
            <div>
              <input type="checkbox" id='vacc' name='vacc' checked={inputValues.vacc} onChange={handleOnChange}/>
              <label htmlFor="vacc"> I'm vaccinated! <GiHealthCapsule/></label>
            </div>

            <div>
              <input type="checkbox" id='mask' name='mask' checked={inputValues.mask} onChange={handleOnChange}/>
              <label htmlFor="mask"> I will wear a mask! <RiSurgicalMaskLine/></label>
            </div> 
          </div>   
           <button type='submit' className='btn'>Let's Party!</button>    
      </fieldset>
      </form>
    </section>
  </>
  )
}

export default Rsvp
