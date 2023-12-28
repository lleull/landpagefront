import React from 'react'
import './nav.css'
import logo from '../../photos/logo.svg'

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='nav'>

      
        <img src={logo} alt='asd'/>
        <ul>
            <li>Features</li>
            <li>Theme</li>
            <li>Sign in</li>
        </ul>
        </div>
    </div>
  )

}

export default Nav