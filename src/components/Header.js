import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

import Rsvp from './Rsvp'

const Header = () => (
  <header>
    <ul className="navigation">
      <li><NavLink exact to='/'>Details</NavLink></li>
      <li><NavLink to='/Rsvp'>Rsvp</NavLink></li>
      <li><NavLink to='/List'>Who's Going</NavLink></li>
    </ul>
  </header>
)

export default Header
