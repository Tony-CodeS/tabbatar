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
        <h1 className='move'> MOVE WITH EASE</h1>
        <p className='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             </p>

            <div className='btn-div'>
                <button className='book-btn'><Link to='/book' id='bookLink'> Book Now</Link></button>
                <button className='sign-btn'> Sign Up</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default hero
