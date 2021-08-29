import React from 'react'
import { useGlobalContext } from '../contexts/context'

const List = () => {
  const { people } = useGlobalContext()

  return (
    <section className ='list'>
      <h1 className='list__header'>RSVP</h1>
      <p>These people are coming, are you?</p>

      <article className='attending'>
        <form>
        <fieldset>
           <div className='signup-section'>
          <label htmlFor="number">First</label>
          <input 
            type="text" 
            name='name'
            required />
        </div>  
          <div className='signup-section'>
          <label htmlFor="number">Last </label>
          <input 
            type="text" 
            name='name'
            required />
        </div>    
          <h2>Can you attend?</h2>
          {/* put in astericks */}
          <label htmlFor="attending">Yes, I'll be there</label>
           <input type="checkbox" name='attending'/>  
          <label htmlFor="reject">No, I can't make it</label>
           <input type="checkbox" name='reject'/>  
           </fieldset>  
      </form>
      </article>
    </section>
  )
}

export default List
