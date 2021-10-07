import React, { useState } from 'react'
import { RsvpSection, AttendingTitle, Label } from '../styles/Rsvp.styles'


const Rsvp = () => {
  const [inputFields, setInputFields] = useState({
    firstName: '',
    lastName: '', 
    checkboxYes: false, 
    checkboxNo: false
  })

  const handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.checked;
    const name = e.target.name;

    setInputFields({
      [name]: value
    })

     console.log(inputFields.firstName);
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputFields.firstName);
  }

  return (
    <RsvpSection>
      <h1 style={{marginBottom: '1rem'}}>RSVP</h1>
        <hr className='hr'></hr>
        <article className='attending'>
          <form onSubmit={handleSubmit}>
            <div className='signup-section'>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              name='firstName'
              value={inputFields.firstName}
              onChange={handleChange}
              required />
          </div>  
            <div className='signup-section'>
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              name='lastName'
              value={inputFields.lastName}
              onChange={handleChange}
              required />
          </div>    

            <AttendingTitle>Can you attend?</AttendingTitle>
            <div className='rsvp'>
            {/* put in astericks */}
            <Label htmlFor="attending" className='checkbox'>
              <input 
                type="checkbox" 
                className='attending'
                name='checkboxYes'
                value={inputFields.checkboxYes}
                onChange={handleChange}
                />
              <div className='checkbox__box'>Yes, I'll be attending</div>
            </Label>
            <Label htmlFor="not__attending" className='checkbox'>
              <input 
                type="checkbox" 
                className='attending'
                name='checkboxNo'
                value={inputFields.checkboxNo}
                onChange={handleChange}
                />
              <div className='checkbox__box'>No, I can't make it</div>
            </Label>
              </div>
              <div className='btn-container'>
              <button type='submit' className='btn'>Submit</button>
              </div>
          </form>
        </article>
    </RsvpSection>
  )
}

export default Rsvp



// import React from 'react'
// import Modal from './Modal'
// import { useGlobalContext } from '../contexts/context'
// import { collection } from 'firebase/firestore'
// import { RsvpForm } from '../styles/'

// const Rsvp = () => {
// const { inputValues, handleOnChange, handleSubmit, state} = useGlobalContext()

//   return (
//     <>
//     <section className='Rsvp'> 
//       <legend><h1>Login</h1></legend>  
//        <p>{state.isModalOpen && <Modal />}</p>  
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//         <div className='rsvp-section'>
//           <label htmlFor="firstName">First Name: </label>
//           <input type="text"
//             placeholder='Required'
//             id='firstName'
//             name='firstName' 
//             value={inputValues.firstName} 
//             onChange={handleOnChange}
//             required />
//         </div>

//         <div className='rsvp-section'>
//           <label htmlFor="lastName">Last Name: </label>
//           <input 
//             type="text"
//             placeholder='Required' 
//             id='lastName'
//             name='lastName' 
//             value={inputValues.lastName}  
//             onChange={handleOnChange}
//             required />
//         </div>

//            <div className='rsvp-section'>
//           <label htmlFor="number">Email: </label>
//           <input 
//             type="email" 
//             id='email' 
//             name='email'
//             placeholder='Required' 
//             value={inputValues.email}
//             onChange={handleOnChange}
//             required />
//         </div> 

//         <div className='rsvp-section'>
//           <label htmlFor="number">Phone Number: </label>
//           <input 
//             type="tel" 
//             id='number' 
//             name='number'
//             placeholder='123-456-7890' 
//             value={inputValues.number}
//             onChange={handleOnChange}
//             required />
//         </div>       
//            <button type='submit' className='btn'>Let's Party!</button>    
//         </fieldset>
//       </form>
//     </section>
//   </>
//   )
// }

// export default Rsvp
