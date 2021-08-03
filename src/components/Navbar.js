import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header>
      <div 
        className='link-wrapper' 
        style={{
          backgroundImage:`url("https://images.unsplash.com/photo-1589050820342-d666e6116a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80")`, 
          backgroundRepeat: 'no-repeat', 
          height: '250px', 
          backgroundPosition: 'center', 
          backgroundSize: 'cover'}}>
        <li><NavLink exact to='/'>Details</NavLink></li>
        <li><NavLink to='/signup'>Rsvp</NavLink></li>
        <li><NavLink to='/List'>Who's Going</NavLink></li> 
      </div>
    </header>
    </>
  )
}

export default Navbar
