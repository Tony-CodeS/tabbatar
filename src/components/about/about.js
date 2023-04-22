import React from 'react'
import './about.css'
import aboutImage from '../../assets/tabbatar6.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    Aos.init({duration:1000})
   }, []);
  return (
    <div className='mainAboutPage' id='About'>
      <div className='aboutPage'>
        <div className='aboutImage' data-aos="flip-right">
            <img src={aboutImage} alt='about' width='100%' height='100%' className='aboutImage2'/>
        </div>

        <div className='aboutText' data-aos="zoom-in">
            <h2 className='aboutHeading' data-aos="flip-right"> About</h2>
            <h2 className='aboutHeading1' data-aos="flip-right">TABBATAR.</h2>
            <p className='firstText' data-aos="zoom-in"> 
            We are a technology 
            company that provides innovative
             solutions to businesses and individuals.
              Our team of experts is passionate about
               technology and is dedicated to delivering top-quality services to our clients.
            </p>

            <p className='secondText' data-aos="zoom-in">           
       Our company was founded with the goal 
       of helping businesses and individuals leverage technology to achieve their goals.
        We understand that technology can be complex and overwhelming, 
        which is why we strive to make it easy and accessible for our clients.
         We work closely with our 
       clients to understand their unique needs and develop 
       tailored solutions that meet their specific requirements.
       Our team is composed of some of the most talented and creative individuals in the industry. We are constantly learning and staying up-to-date with the latest technological advancements, 
       and we use this knowledge to deliver cutting-edge solutions to our clients.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
