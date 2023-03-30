import React from 'react'
import { useState } from 'react'
import logo from '../../assets/Vector.png'
import './navbar.css'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='tony'>
        <nav className="navigation">
   <div>
   <p className="brand-name">
       MOVAZZ
      </p>
   </div>
   <img src={logo} alt='movazz' className='logo'/>
      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
         className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
        <ul>
          <li className='list'>
            <a href="/home">HOME</a>
          </li>
          <li className='list'>
            <a href="/about">ABOUT US</a>
          </li>
          <li className='list'>
            <a href="/contact">SERVICES</a>
          </li>

          <li className='list'>
            <a href="/contact">TESTIMONIALS</a>
          </li>

          <li className='list'>
            <a href="/contact">TEAM</a>
          </li>

           <li>
           <button className='con-btn'> <a href='/' id='bookingLink'> BOOK US</a></button>
          </li>  
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar