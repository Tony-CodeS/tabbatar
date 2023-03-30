import React from 'react'
import "./services.css"
import Img1 from '../../assets/aboutImage.png'
import Img2 from '../../assets/Rectangle 9.png'
import Img3 from '../../assets/Rectangle 10.png'
import Img4 from '../../assets/Rectangle 11.png'
import Img5 from '../../assets/Rectangle 12.png'
import Img6 from '../../assets/unsplash_ZlgYTC28pGE.png'

function service() {
  return (
    <div className='mainService'>
      <div className='serviceDiv'>
        <h1 className='serviceHeading'> Services</h1>
        <p className='serviceText'> lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
