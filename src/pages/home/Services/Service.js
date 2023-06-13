import React from 'react'
import Treatment from './Treatment'
import DentalCare from './DentalCare'

const Service = () => {
  return (
    <div>
      <div className='text-center mt-28'>
        <h1 className='font-bold text-xl font-color'>OUR SERVICE</h1>
        <h1 className='font-bold text-2xl'>Services We Provide</h1>
      </div>
      <Treatment></Treatment>
      <DentalCare></DentalCare>
    </div>
  )
}

export default Service
