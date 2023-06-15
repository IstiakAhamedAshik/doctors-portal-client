import React from 'react'
import Banner from './banner/Banner'
import './home.css'
import InfoCards from './InfoCards/InfoCards'
import Service from './Services/Service'
import MakeAppointMent from './MakeAppointment/MakeAppointMent'
import Testimonial from './Testimonial/Testimonial'
import StayConnect from './StayConnect/StayConnect'

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Service></Service>
      <MakeAppointMent></MakeAppointMent>
      <Testimonial></Testimonial>
      <StayConnect></StayConnect>
    </div>
  )
}

export default Home
