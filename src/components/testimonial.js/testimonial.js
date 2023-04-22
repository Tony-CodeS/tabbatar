import React, { useState } from 'react'
import './testimonial.css'
import Img1 from '../../assets/Rectangle 13 (1).png'
import Img2 from '../../assets/Rectangle 13 (2).png'
import Img3 from '../../assets/Rectangle 13 (3).png'
import Img4 from '../../assets/Rectangle 13 (4).png'
import {AiFillStar} from 'react-icons/ai'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'

function Testimonial() {
  useEffect(() => {
    Aos.init({duration:1000})
   }, []);
const testimonialArray =[
    {photo:Img1,
     name: 'SEGUN', 
     comment:"If you want to stay ahead of the curve in the ever-evolving world of technology, this is the company you need to partner with. Their expertise and forward-thinking approach have helped us achieve our goals and outpace our competitors"},
     {photo:Img2,
     name: 'ANITA', 
    comment:"We needed a technology partner that could deliver cutting-edge solutions on time and on budget. This company exceeded our expectations with their talented team, proven methodologies, and innovative approach"},
    {photo:Img3,
    name: 'HASSANA', 
    comment:"This company is more than just a vendor, they're a true partner in our success. Their deep understanding of our business and industry, coupled with their technical expertise, has helped us transform our operations and achieve our goals"},
    {photo:Img4,
    name: 'ANTHONY', 
    comment:"We've worked with many technology companies over the years, but this one stands out for their exceptional service and commitment to our success. They're not just developers, they're problem solvers who go above and beyond to deliver results."}]

const [testimonial, setTestimonial] = useState(testimonialArray.map(info =>{
    return(
     <div>
           <div  className='testimonialcardDiv'  data-aos="fade-up"> 
        <div className='testimonialImageDiv'>
            <img src={info.photo} alt='' className='testImg'/>
        </div>
        <div className='testimonialWriteUp'>
            <h1 className='testimonialName'> {info.name}</h1>
            <p className='testimonialComment'> {info.comment}</p>
          <div className='rating'>
          <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </div>
        </div>
            {info.rating}
        </div>
     </div>
    )
}))
  return (
    <div className='mainTestimonialDiv' id='Testimonial'>
      <div className='testimonialDiv'>
        <h1 className='testimonialTitle' data-aos="zoom-in"> Testimonial</h1>
      </div>
      <div  className='maintestimonialcardDiv'>
      {testimonial}
      {setTestimonial}
      </div>
    </div>
  )
}

export default Testimonial
