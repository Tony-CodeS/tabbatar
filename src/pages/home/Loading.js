import React from 'react'
import LoadingLogo from '../../assets/WhatsApp_Image_2023-04-21_at_11.16.29_AM-removebg-preview.png'
import './Loading.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'


function Loading() {
    useEffect(() => {
        Aos.init({duration:3000})
       }, []);
  return (
    <div className='LoadingDiv'>
        <div className='LoadingImg'  data-aos="zoom-in">
            <img src={LoadingLogo} alt='loadingLogo' width='100%' height='100%'/>
            <div class="loader"></div>
        </div>
    </div>
  )
}

export default Loading