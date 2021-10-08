import React, { useState } from 'react'
import { useAuthGlobal } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../contexts/context'

const List = () => {
  const [error, setError] = useState('')
  const { currentUser } = useAuthGlobal()
  const { logout, attending } = useGlobalContext()
  const history = useHistory()

  console.log(attending[0]);

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch (error) {
      setError('Failed to log out')
    }
  }

  return (
    <div style={{paddingTop: '500px'}}>
      <h1>
        {attending.map((attendee) => {
          const { firstName, lastName, checkboxYes, checkboxNo, id } = attendee;
          return (
            <div key={id.toString()}>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
          </div>
          ) 
        })}
      </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default List
