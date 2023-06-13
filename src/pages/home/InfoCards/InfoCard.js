import React from 'react'
import '../home.css'
const InfoCard = (props) => {
  const { name, description, logo, color } = props.card
  return (
    <div className={`info-flex ${color} text-white`}>
      <div>
        <img src={logo} alt='' />
      </div>
      <div>
        <h4 className='text-lg font-semibold'>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
