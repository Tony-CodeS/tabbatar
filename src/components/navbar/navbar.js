import React from 'react'
import { useState } from 'react'
import tabbatarlogo from '../../assets/WhatsApp_Image_2023-04-21_at_11.16.29_AM-removebg-preview.png'
import './navbar.css'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='main-Nav'>
        <nav className="navigation">
   <img src={tabbatarlogo} alt='movazz' className='logo'/>
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
            <a href="/">HOME</a>
          </li>
          <li className='list'>
            <a href="#About">ABOUT US</a>
          </li>
          <li className='list'>
            <a href="#Service">SERVICES</a>
          </li>

          <li className='list'>
            <a href="#Testimonial">TESTIMONIALS</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar