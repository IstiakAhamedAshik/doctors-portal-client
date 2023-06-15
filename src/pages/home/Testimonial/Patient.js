import React from 'react'
import '../home.css'
const Patient = (props) => {
  const { name, address, pic, desc } = props.patient
  return (
    <div className='patient'>
      <p>{desc}</p>
      <div className='info-client'>
        <img className='patien-pic' src={pic} alt='' srcset='' />
        <div>
          <h3 className='font-medium'>{name}</h3>
          <h4>{address}</h4>
        </div>
      </div>
    </div>
  )
}

export default Patient
