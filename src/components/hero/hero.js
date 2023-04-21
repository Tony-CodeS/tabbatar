import React from 'react'
import Navbar from '../navbar/navbar'
import {  Link } from "react-router-dom";

import './hero.css'

function hero() {
  return (
    <div id='Home'>
       
      <div className='mainHero'>
        <div className='overlay'>
        <Navbar/>
        <div className='HeroWriteUp'>
        <p className='text'> We are a cutting-edge technology company dedicated to providing innovative solutions to our clients. Our team of experts is composed of some of the most talented and creative individuals in the industry, and we are committed to delivering top-quality services to our clients.
        If you're interested in learning more about our services, our team, our mission , and our values. you can explore our website further or contact us directly. We are always happy to answer any questions you may have and help you find the solutions you need.
             </p>

            <div className='btn-div'>
                <button className='book-btn'><Link to='/book' id='bookLink'> Send a Mail</Link></button>
                <button className='sign-btn'> Sign Up</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default hero
