import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { useGlobalContext } from '../context'

const Header = () => {
  const { count } = useGlobalContext()
  return (
    <header>
      <ul className="navigation" style={{backgroundImage:`url("https://images.unsplash.com/photo-1589050820342-d666e6116a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80")`, backgroundRepeat: 'no-repeat', height: '250px', backgroundPosition: 'center'}}>
        <h1 className='header__heading'>Beer Fest 2021</h1>
        <p className='count'>Attending: {count}</p>
        <div className='link-wrapper'>
          <li><NavLink exact to='/'>Details</NavLink></li>
          <li><NavLink to='/Rsvp'>Rsvp</NavLink></li>
          <li><NavLink to='/List'>Who's Going</NavLink></li>
        </div>
      </ul>
    </header>
  )
}



export default Header
