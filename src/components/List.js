import React from 'react'
import { useGlobalContext } from '../contexts/context'

const List = () => {
  const { people } = useGlobalContext()

  return (
    <section className ='list'>
      <h1 className='list__header'>RSVP</h1>
      <p>Can you make it?</p>

      <article className='attending'>
        <form>
        <fieldset>
           <div className='signup-section'>
          <label htmlFor="number">Name</label>
          <input 
            type="text" 
            required />
        </div> 

        <div className='signup-section'>
          <label htmlFor="number">Password: </label>
          <input 
            type='checkbox'
            required />
        </div>       
           <button type='submit' className='btn'>Sign Up!</button>  
           </fieldset>  
      </form>
      </article>
    </section>
  )
}

export default List
