import React from 'react'
import logo1 from '../../assets/WhatsApp_Image_2023-04-21_at_11.16.29_AM-removebg-preview.png'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import './footer.css'

function footer() {
  return (
    <div className='mainFooterDiv'>
      <div className='footer'>
        <div>
    
       <img src={logo1} alt='movazz' className='logo'/>
        </div>

        <div className='secondFooter'>
          <div className='footerLink'>
            <ul className='footUl'>
              <li  className='footLi'><a href='/' className='footA'> Home </a></li>
              <li  className='footLi'><a href='/' className='footA'> Contact Us </a></li>
              <li  className='footLi'><a href='/' className='footA'> Privacy Policy </a></li>
              <li  className='footLi'><a href='/' className='footA'> Terms And Condition</a></li>
              <li  className='footLi'><a href='/' className='footA'> Terms Of Services</a></li>
            </ul>
          </div>

          <div className='subscribe'>
            <p className='subscription'>Tabbatar Technologies Limited 
            <br></br> No 2 Oliyide Street Off Unity Road 
            <br></br>Ikeja, Lagos State Nigeria
            <br></br> +2349075229900</p>
            {/* <p className='subscribeAction'>Enter Your Email</p>
            <input type='email' placeholder='' className='subscribeEmail'/> */}
          </div>

          <div className='logo1Div'>
          <img src={logo1} alt='movazz' className='logo1' />
          </div>

       
        </div>
        <div className='lastfooter'>
        <div className='copyright'>
           <AiOutlineCopyrightCircle className='copyrightIcon'/>
           <p className='copyrighttext'> 2023 All Rights Reserved</p>
          </div>

          <div className='IconXX'>
        <div> <BsInstagram className='Icon'/></div>
          <div><AiOutlineTwitter className='Icon'/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer