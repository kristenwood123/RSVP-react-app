import React from 'react'


const List = () => {

  return (
    <section className ='list'>
      <h1 className='list__header'>RSVP</h1>
        <article className='attending'>
          <form>
            <div className='signup-section'>
            <label htmlFor="name">First</label>
            <input 
              type="text" 
              name='name'
              required />
          </div>  
            <div className='signup-section'>
            <label htmlFor="name">Last </label>
            <input 
              type="text" 
              name='name'
              required />
          </div>    

            <h2>Can you attend?</h2>
            <div className='rsvp'>
            {/* put in astericks */}
              <input type="checkbox" className='attending'/>
            <label htmlFor="attending">
              <span>Yes, I'll be there</span>
            </label>
            <input type="checkbox" className='reject'/>
              <label htmlFor="attending">
              <span>No, I can't make it</span>
            </label>
              </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
        </article>
    </section>
  )
}

export default List
