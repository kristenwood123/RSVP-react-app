import React, { useState } from 'react'
import Modal from './Modal'

const Rsvp = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    number: ''
  });

  const [people, setPeople] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleOnChange = e => {
    //  const target = e.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    
       setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));  
  };

  const handleSubmit = e => {
     e.preventDefault();
    const {firstName, lastName, number, plusOne, driver} = inputValues;

    if(firstName && lastName && number) {
      const person = {id: new Date().getTime().toString(), firstName, lastName, number, plusOne, driver}
      setPeople((prevState) => {
        return [...prevState, person]
      })
      setInputValues({
        firstName: '',
        lastName: '',
        number: ''
      })
    } 
  }

  return (
    <>
    {showModal && <Modal />}
    <section className='Rsvp'>
      <legend><h1>Please RSVP</h1></legend>     
      <form onSubmit={handleSubmit}>
        <fieldset>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text"
            placeholder='Required'
            id='firstName'
            name='firstName' 
            value={inputValues.firstName} 
            onChange={handleOnChange}
            required />
        </div>

        <div>
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

        <div>
          <label htmlFor="number">Phone Number</label>
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
          <button type='submit' className='btn'>Let's Party!</button>         
      {/* </fieldset> */}
      </form>
      {people.map((person) => {
            const {firstName, lastName, number, plusOne, driver, id} = person;
            return (
              <li key={id}>
                <h4>{firstName}{lastName}</h4>
                <p>{number}</p>
                <p>{plusOne}</p>
                <p>{driver}</p>
              </li>
            )
          })} 
    </section>
  </>
  )
}

export default Rsvp
