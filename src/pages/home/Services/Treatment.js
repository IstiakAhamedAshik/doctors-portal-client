import React from 'react'
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import GetOneTreatment from './GetOneTreatment'
const Treatment = () => {
  const treatMents = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      des: 'Make your teeth strong and white',
      pic: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      des: 'Make your teeth cavity free',
      pic: cavity,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      des: 'Make your teeth strong and white',
      pic: whitening,
    },
  ]

  return (
    <div className='mt-11 info-cards grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {treatMents.map((treatment) => (
        <GetOneTreatment
          key={treatment.id}
          treatment={treatment}
        ></GetOneTreatment>
      ))}
    </div>
  )
}

export default Treatment
