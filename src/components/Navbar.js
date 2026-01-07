import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
        <ul className='nav-list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/clients'>Clients</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/services'>Services</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar