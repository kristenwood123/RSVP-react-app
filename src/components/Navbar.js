import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='link-wrapper'>
        <li><NavLink exact to='/'>Details</NavLink></li>
        <li><NavLink to='/Rsvp'>Rsvp</NavLink></li>
        <li><NavLink to='/List'>Who's Going</NavLink></li>
      </div>
    </>
  )
}

export default Navbar
