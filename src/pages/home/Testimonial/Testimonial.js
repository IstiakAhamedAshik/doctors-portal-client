import React from 'react'
import '../home.css'
import quotePic from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import Patient from './Patient'

const Testimonial = () => {
  const Patients = [
    {
      id: 1,
      name: 'Winson Herry',
      address: 'California',
      pic: people1,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      id: 2,
      name: 'Winson Herry',
      address: 'California',
      pic: people1,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      id: 3,
      name: 'Winson Herry',
      address: 'California',
      pic: people1,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
  ]
  return (
    <section className='mt-16 ml-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-color text-xl font-bold'>Testimonial</h1>
          <h2 className='text-4xl font-medium'>What Our Patients Says</h2>
        </div>
        <figure>
          <img className='w-24 lg:w-48' src={quotePic} alt='' srcset='' />
        </figure>
      </div>
      <div className='mt-10 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {Patients.map((patient) => (
          <Patient key={patient.id} patient={patient}></Patient>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
