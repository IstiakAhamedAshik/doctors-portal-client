import React from 'react'
import Banner from './banner/Banner'
import './home.css'
import InfoCards from './InfoCards/InfoCards'
import Service from './Services/Service'
import MakeAppointMent from './MakeAppointment/MakeAppointMent'
const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Service></Service>
      <MakeAppointMent></MakeAppointMent>
    </div>
  )
}

export default Home
