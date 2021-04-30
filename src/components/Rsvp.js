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
        <button type='submit' className='btn'>Let's Party!</button> 
      </fieldset>

      {/* <fieldset>
        <div className="rsvp-additions">
            <div>
              <input type="checkbox" id='plusOne' name='plusOne' checked={inputValues.plusOne} onChange={handleOnChange}/>
              <label htmlFor="plusOne" className='plusOne'>I want to bring a friend!</label>
            </div>

            <div>
              <input type="checkbox" id='driver' name='driver' checked={inputValues.driver} onChange={handleOnChange}/>
              <label htmlFor="driver">I'll be sober driver</label>
            </div> 
          </div> */}
                  
      {/* </fieldset> */}
      </form>
    </section>
  </>
  )
}

export default Rsvp
