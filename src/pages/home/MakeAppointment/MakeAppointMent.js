import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import '../home.css'

const MakeAppointMent = () => {
  return (
    <div className='appointment-background'>
      <div className='hero pt-20 '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='margin'>
            <h1 className='font-color text-xl font-bold'>Appointment</h1>
            <h1 className='text-3xl font-bold text-white'>
              Make an appointment Today
            </h1>
            <p className='py-6 text-white'>
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
              The point of <br /> using Lorem Ipsumis that it has a more-or-less
              normal distribution of <br /> letters,as opposed to using 'Content
              here, content here', making it look <br /> like readable English.
              Many desktop publishing packages and web page
            </p>
            <button className='btn btn-home '>Get Started</button>
          </div>
          <img src={doctor} alt='' className='doctor-pic hidden lg:block' />
        </div>
      </div>
    </div>
  )
}

export default MakeAppointMent
