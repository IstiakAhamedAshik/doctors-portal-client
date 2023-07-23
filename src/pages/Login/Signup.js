import React, { useContext } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/Authprovider'
const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext)
  const handaleSgineIn = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        const userInfo = {
          displayName: name,
        }

        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
    form.reset()
  }
  return (
    <div>
      <div className='login-page'>
        <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
        <form onSubmit={handaleSgineIn}>
          <div>
            <input type='text' name='name' placeholder='Your Name'></input>
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
            ></input>
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Your Password'
              required
            ></input>
          </div>
          <div>
            <input className='login-btn' type='submit' value='SIGNUP' />
          </div>
        </form>
        <div>
          <p className='text-center mt-2'>
            You already have an account?{' '}
            <Link className='link-signup' to='/login'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
