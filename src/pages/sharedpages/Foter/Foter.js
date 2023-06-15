import React from 'react'
import { Link } from 'react-router-dom'

const Foter = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='pb-10 footer-background'>
      <footer className='footer p-10 mt-10'>
        <div>
          <span className='footer-title'>SERVICES</span>
          <Link className='link link-hover'>Emergency Checkup</Link>
          <Link className='link link-hover'>Monthly Checkup</Link>
          <Link className='link link-hover'>Marketing</Link>
          <Link className='link link-hover'>Weekly Checkup</Link>
        </div>
        <div>
          <span className='footer-title'>ORAL HEALTH</span>
          <Link className='link link-hover'>Fluoride Treatment</Link>
          <Link className='link link-hover'>Cavity Filling</Link>
          <Link className='link link-hover'>Teath Whitening</Link>
        </div>
        <div>
          <span className='footer-title'>OUR ADDRESS</span>
          <p>New York - 101010 Hudson</p>
        </div>
      </footer>
      <div className='text-center'>
        <p>Copyright {year} All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Foter
