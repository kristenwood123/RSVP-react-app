import React from 'react'
import { useGlobalContext } from '../context'

const List = () => {
  const { people } = useGlobalContext()

  return (
    <section className ='list'>
      <h1 className='list__header'>Who's Going</h1>
      <p>These people are coming, are you?</p>

      <article className='attending'>
        <ul className='list__ul'>
          {people.map((person) => {
            const {firstName, lastName, number, id} = person;
            return (
        
              <li key={id} className='person'>
                <div className='person__text'>
                <h4>{firstName} {lastName}</h4>
                <p>Phone: {number}</p>
                </div>
              </li>
            )
          })}
            <li className='person'>
                <div className='person__text'>
                <h4>Annie Carlson</h4>
                <p>Phone: 854-123-2432</p>
                </div>
              </li>
               <li className='person'>
                <div className='person__text'>
                <h4>Frank Willis</h4>
                <p>Phone: 555-123-1295</p>
                </div>
              </li>
          </ul>
      </article>
    </section>
  )
}

export default List
