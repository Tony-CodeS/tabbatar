import React from 'react'
import './about.css'
import aboutImage from '../../assets/aboutImage.png'

function about() {
  return (
    <div className='mainAboutPage' id='About'>
      <div className='aboutPage'>
        <div>
            <img src={aboutImage} alt='about'/>
        </div>

        <div className='aboutText'>
            <h2 className='aboutHeading'> MOVING MADE</h2>
            <h2 className='aboutHeading1'>EASY.</h2>
            <p className='firstText'> 
                movazzz express is a limited liability
                firm founded to ease and improve relocation process
                that involves transportation of belongings and enhance 
                courier service
            </p>

            <p className='secondText'>
                lorem ipsum dolor sit amet consectetur. Ultricies etiam semper
                tristique adipiscing. Adipiscing amet ut amet aenean consectetur
                senectus. Sagittis condimentum egestas hac neque urna nunc velit aliquiet
                mattis. Et etiam tristique dignissum nibh. Enim orci turpis eu enim posuere. Dictum bibendum
                 turpis et ned netus. Libero lobortis cras eu a. Nulla nunc tellus mauris pellentesque sapien netus mauris
                 lectus. Posuere sed nullam semper dignissim sed mattis diam consectetur Sed tincidunt veliit enim ornare laculis 
                 eget eu nuila. Cum quam viverra in.
            </p>
        </div>
      </div>
    </div>
  )
}

export default about
