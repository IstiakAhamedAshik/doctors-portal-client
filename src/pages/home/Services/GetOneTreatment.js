import React from 'react'

const GetOneTreatment = (props) => {
  const { name, des, pic } = props.treatment
  return (
    <div className='one-treatment'>
      <img src={pic} alt='' />
      <h1 className='text-lg font-bold'>{name}</h1>
      <p>{des}</p>
    </div>
  )
}

export default GetOneTreatment
