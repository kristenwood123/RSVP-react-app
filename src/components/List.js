import React from 'react'
import { useGlobalContext } from '../context'


const List = () => {
  const {people, inputValues, handleOnChange, handleSubmit} = useGlobalContext()

  return (
    <section className ='List'>
      <h1>Who's Going</h1>
      <p>There people are coming, are you?</p>
      <p>+1 means they're bringing someone. A steering wheel indicates a sober driver.</p>
      <article className='attending'>
        <ul>
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
        </ul>
      </article>
    </section>
  )
}

export default List
