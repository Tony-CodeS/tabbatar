import React from 'react'
import './bookingForm.css'

function BookingForm() {
  return (
<div className='bookingDiv'>
 <div className='mainBookingDiv'>
    <div className='bookTitle'> <h1>BOOK NOW </h1></div>

 <form>
 <div className='formCard'>
    <h3> Residential Or Business ?</h3>

  <div className='secondFormDiv'>
  <input type='radio' name='residencetype'  className='radio'/>
    <label className='label'>Home</label>
    <input type='radio' name='residencetype'  className='radio'/>
    <label>Business</label>
  </div>
    </div>

    <div className='formCard'>
    <h3> What can we help you with?</h3>

   <div className='secondFormDiv'>
<div className='moving'>
<input type='radio' name='businesstype' className='radio'/>
    <label className='label'>For moving home</label>
</div>
   <div>
   <input type='radio' name='businesstype' className='radio'/>
    <label>For moving Business</label>
   </div>
   </div>
    </div>

    <div className='formCardLocation'>
 <div className='formCard1'>
 <div className='formCard1Location'>
  <h3> Current Location</h3>
    <input type='text' className='input'/>
  </div>
  <div div className='formCard1Location'>
  <h3> New Location</h3>
    <input type='text' className='input'/>
  </div>
 </div>
</div>

<div className='formCardVehicle'>
    <h2> Select Vehicle</h2>
    <select>
        <option>Lorry</option>
        <option>Car </option>
        <option>Truck </option>
    </select>
</div>

<div className='formCard'>
    <h3>Email</h3>
    <input type='email' className='inputEmail' placeholder='Enter Email'/>
    
  
</div>
<div className='formCardLocation'>
    <button className='QuoteBtn'> Get a Quote</button>
</div>
 </form>


 </div>
</div>
  )
}

export default BookingForm
