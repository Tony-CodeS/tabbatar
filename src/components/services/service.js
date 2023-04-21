import React from 'react'
import "./services.css"
import Img1 from '../../assets/tabbatar2.jpg'
import Img2 from '../../assets/Rectangle 9.png'
import Img3 from '../../assets/tabbatar1.jpg'
import Img4 from '../../assets/tabbatar3.jpg'
import Img5 from '../../assets/tabbatar6.jpg'
import Img6 from '../../assets/tabbatar7.jpg'

function service() {
  return (
    <div className='mainService' id='Service'>
      <div className='serviceDiv'>
        <h1 className='serviceHeading'> Services</h1>
        <p className='serviceText'> 
        We are a team of talented individuals committed to making
         a positive impact on the world through our work. 
         We believe that technology has the power to transform 
         businesses and improve people's lives.
          Our customized approach to software development, 
          digital marketing, and cloud computing solutions
           will help you achieve your goals.
           Partnering with us means gaining access
         to top talent in the industry, who are dedicated to delivering exceptional results. Contact us today to learn more about our services and how we can help you harness the power of technology to transform your business.
        </p>
      </div>

      <div className='serviceImageDiv'>
        <div className='ImgDiv1'>
            <img src={Img1} alt='imagee' className='Img1'/>
        </div>
        <div className='ImgDiv2'>
            <div className='childImgDiv'><img src={Img2} alt='imagee' className='Img2'/></div>
            <div className='childImgDiv'><img src={Img3} alt='imagee' className='Img3'/></div>
        </div>
        <div className='ImgDiv3'>
        <img src={Img4} alt='imagee'  className='Img4'/>
        </div>
        <div className='ImgDiv4'>
            <div className='childImgDiv'><img src={Img5} alt='imagee' className='Img5'/></div>
            <div className='childImgDiv'><img src={Img6} alt='imagee' className='Img6'/></div>
        </div>
      </div>
    </div>
  )
}

export default service
