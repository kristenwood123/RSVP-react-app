import React from 'react'
// import Modal from './Modal'
import { useGlobalContext } from '../context'

const Rsvp = () => {
 const { inputValues, handleOnChange, handleSubmit } = useGlobalContext()

  return (
    <>
    {/* {showModal && <Modal />} */}
    <section className='Rsvp'> 
      <legend><h1>Please RSVP</h1></legend>    
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
              <label htmlFor="vacc">I'm vaccinated!</label>
            </div>

            <div>
              <input type="checkbox" id='mask' name='mask' checked={inputValues.mask} onChange={handleOnChange}/>
              <label htmlFor="mask">I will wear a mask!</label>
            </div> 
          </div>      
      </fieldset>
      <button type='submit' className='btn'>Let's Party!</button> 
      </form>
    </section>
  </>
  )
}

export default Rsvp
