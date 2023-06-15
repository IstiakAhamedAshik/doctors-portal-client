import React from 'react'
import '../home.css'
const StayConnect = () => {
  return (
    <div className='mt-16 appointment-background '>
      <div className='text-center pt-11'>
        <h1 className='font-color font-medium'>Contuct Us</h1>
        <h2 className='text-4xl font-medium text-white'>
          Stay connected with us
        </h2>
      </div>
      <div className='stay-input'>
        <input type='email' name='email' placeholder='Email Address' />
        <input type='text' name='Subject' placeholder='Subject' />
        <textarea
          name='textarea'
          id=''
          cols='30'
          rows='10'
          placeholder='Your Message'
        ></textarea>
        <div className='text-center mt-4'>
          <button className='btn-connected'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default StayConnect
