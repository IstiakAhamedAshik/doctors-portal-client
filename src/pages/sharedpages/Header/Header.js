import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { AuthContext } from '../../../context/Authprovider'
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handaleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='navbar position bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/'> Home</Link>
            </li>

            <li>
              <Link to='/appointment'>Appointment</Link>
            </li>

            <li>
              <Link to='/contuct'>Contuct Us</Link>
            </li>
            {user?.uid ? (
              <>
                {' '}
                <li>
                  <Link to='/dashbord'>Dashbord</Link>
                </li>
                <button onClick={handaleLogout}>
                  <li>
                    <Link to='/login'>Sign out</Link>
                  </li>
                </button>
              </>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Doctors Portal
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/appointment'>Appointment</Link>
          </li>

          <li>
            <Link to='/contuct'>Contuct Us</Link>
          </li>
          {user?.uid ? (
            <>
              {' '}
              <li>
                <Link to='/dashbord'>Dashbord</Link>
              </li>
              <button onClick={handaleLogout}>
                <li>
                  <Link to='/login'>Sign out</Link>
                </li>
              </button>
            </>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
