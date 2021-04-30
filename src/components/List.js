import React from 'react'
import { useGlobalContext } from '../context'
// import { FaMask } from 'react-icons/fa';

const List = () => {
  const { people } = useGlobalContext()

  return (
    <section className ='list'>
      <h1 className='list__header'>Who's Going</h1>
      <p>These people are coming, are you?</p>
      <p>A means they are vaccinated. A means they will be wearing a mask!</p>
      <article className='attending'>
        <ul className='list__ul'>
          {people.map((person) => {
            const {firstName, lastName, number, vacc, mask, id} = person;
            console.log(mask);
            return (
        
              <li key={id} className='person'>
                <div className='person__text'>
                <h4>{firstName} {lastName}</h4>
                <p>Phone: {number}</p>
                <p>{mask && 'helloo'}</p>
                <p>{vacc && 'hello'}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </article>
    </section>
  )
}

export default List
