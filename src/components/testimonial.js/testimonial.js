import React, { useState } from 'react'
import './testimonial.css'
import Img1 from '../../assets/Rectangle 13 (1).png'
import Img2 from '../../assets/Rectangle 13 (2).png'
import Img3 from '../../assets/Rectangle 13 (3).png'
import Img4 from '../../assets/Rectangle 13 (4).png'
import {AiFillStar} from 'react-icons/ai'

function Testimonial() {
const testimonialArray =[
    {photo:Img1,
     name: 'TAMEYI SEGUNYI', 
     comment:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.lorem ipsum Lorem ipsum dolor sit amet consectetur.lorem ipsum"},
     {photo:Img2,
     name: 'TAMEYI SEGUNYI', 
    comment:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.lorem ipsum Lorem ipsum dolor sit amet consectetur.lorem ipsum"},
    {photo:Img3,
    name: 'TAMEYI SEGUNYI', 
    comment:"Lorem ipsum dolor sit ametLorem ipsum dolor sit amet  consectetur.lorem ipsum Lorem ipsum dolor sit amet consectetur.lorem ipsum"},
    {photo:Img4,
    name: 'TAMEYI SEGUNYI', 
    comment:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.lorem ipsum Lorem ipsum dolor sit amet consectetur.lorem ipsum"}]

const [testimonial, setTestimonial] = useState(testimonialArray.map(info =>{
    return(
     <div>
           <div  className='testimonialcardDiv'> 
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
    <div className='mainTestimonialDiv'>
      <div className='testimonialDiv'>
        <h1 className='testimonialTitle'> Testimonial</h1>
      </div>
      <div  className='maintestimonialcardDiv'>
      {testimonial}
      {setTestimonial}
      </div>
    </div>
  )
}

export default Testimonial
