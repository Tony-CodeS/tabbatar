import React from 'react'
import Img1 from '../../assets/Rectangle 17.png'
import Img2 from '../../assets/Rectangle 18.png'
import Img3 from '../../assets/Rectangle 17 (1).png'
import './works.css'

function works() {
  return (
    <div className='mainWorksDiv'>
     <div className='worksDiv'>
       <div className='mainTitleDiv'>
       <h1 className='mainTitle1'> HOW IT</h1>
        <h1 className='mainTitle2'>WORKS</h1>
       </div>
       <p className='worksText'>
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       </p>
     </div>

     <div className='secondWorksDiv'>
        <div className='worksCard'>
            <div className='worksImgDiv'><img src={Img1} alt='' className='worksImg'/></div>
            <div className='cardDescription'>
                <h1 className='cardTitle'> FIND YOUR DELIVERY</h1>
                <p className='cardText'> lorem ipsum, lorem ipsum,
                lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum,  </p>
            </div>
        </div>
        <div className='worksCard'>
        <div className='worksImgDiv'><img src={Img2} alt='' className='worksImg'/></div>
        <div className='cardDescription'>
                <h1 className='cardTitle'> GET MOVING</h1>
                <p className='cardText' id='cardText'> lorem ipsum, lorem ipsum,
                lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum,  </p>
            </div>
        </div>
        <div className='worksCard'>
        <div className='worksImgDiv'><img src={Img3} alt='' className='worksImg'/></div>
        <div className='cardDescription'>
                <h1 className='cardTitle'> TRACK AND PAY IN THE APP</h1>
                <p className='cardText'> lorem ipsum, lorem ipsum,
                lorem ipsum, lorem ipsum, 
                lorem ipsum, lorem ipsum,  </p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default works
