import React from 'react'
import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import Services from '../../components/services/service'
import Works from '../../components/works/works'
import Testimonial from '../../components/testimonial.js/testimonial'
import Footer from '../../components/footer/footer'
function home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Works/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default home
