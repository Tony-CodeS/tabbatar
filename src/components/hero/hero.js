import React from 'react'
import { useEffect } from 'react'
import Navbar from '../navbar/navbar'
import Aos from 'aos';
import "aos/dist/aos.css"

import './hero.css'

function Hero() {
    useEffect(() => {
    Aos.init({duration:1000})
   }, []);
  return (
    <div id='Home'>
       
      <div className='mainHero'>
        <div className='overlay'>
        <Navbar/>
        <div className='HeroWriteUp'>
        <p className='text' data-aos="zoom-in"> We are a cutting-edge technology company dedicated to providing innovative solutions to our clients. Our team of experts is composed of some of the most talented and creative individuals in the industry, and we are committed to delivering top-quality services to our clients.
        If you're interested in learning more about our services, our team, our mission , and our values. you can explore our website further or contact us directly. We are always happy to answer any questions you may have and help you find the solutions you need.
             </p>

            <div className='btn-div' data-aos="flip-right">
                <button className='book-btn'><a href='mailto:info@tabbatar.com' id='bookLink'> Send a Mail</a></button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
