import React from 'react'
import img0 from '../../../assets/images/chair.png'
import '../home.css'
const Banner = () => {
  return (
    <div className='background-pic'>
      <div className='hero pt-20 pb-40'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={img0} alt='' className='max-w-sm  rounded-lg shadow-2xl' />
          <div className='margin'>
            <h1 className='text-5xl font-bold'>
              Your New Smile Starts <br /> Here
            </h1>
            <p className='py-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since the
            </p>
            <button className='btn btn-home '>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
