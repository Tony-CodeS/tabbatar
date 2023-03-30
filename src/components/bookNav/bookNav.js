import React from 'react'

import logo from '../../assets/Vector.png'
import './bookNav.css'

const BookNav = () => {
  return (
    <div className='bookNAV'>
        <nav className="navigation">
   <div>
   <p className="book-brand-name">
       MOVAZZ
      </p>
   </div>
   <img src={logo} alt='movazz' className='logo'/>
    
   
    </nav>
    </div>
  )
}

export default BookNav