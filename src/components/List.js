import React, { useState } from 'react'
import { useAuthGlobal } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const List = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuthGlobal()
  const history = useHistory()


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
    <div style={{paddingTop: '500px', backgroundColor: 'salmon'}}>
      <h1>
       List!
      </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default List
