import React from 'react'
import '../home.css'
import picT from '../../../assets/images/treatment.png'
const DentalCare = () => {
  return (
    <div>
      <div className='hero pt-20 pb-40'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='margin'>
            <h1 className='text-5xl font-bold'>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className='py-6'>
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
              The point <br /> of using Lorem Ipsumis that it has a more-or-less
              normal <br />
              distribution of letters,as opposed to using 'Content <br />
              here, content here', making it look like readable English. Many
              desktop <br />
              publishing packages and web page
            </p>
            <button className='btn btn-home '>Get Started</button>
          </div>
          <img
            src={picT}
            alt=''
            className='max-w-sm w-1/2 rounded-lg shadow-2xl mr-9'
          />
        </div>
      </div>
    </div>
  )
}

export default DentalCare
