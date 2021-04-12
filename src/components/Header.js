import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Header = () => (
  <header>
    <ul className="navigation">
      <li><NavLink to='/'>Details</NavLink></li>
      <li><NavLink to='/Rsvp'>Rsvp</NavLink></li>
      <li><NavLink to="WhosGoing">Who's Going</NavLink></li>
    </ul>
  </header>
)

export default Header
