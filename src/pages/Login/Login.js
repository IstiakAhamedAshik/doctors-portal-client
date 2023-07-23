import React, { useContext } from 'react'
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Authprovider'
const Login = () => {
  const { signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || '/'
  const handaleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate(from, { replace: true })
        form.reset()
      })
      .catch((error) => {
        console.log(error)
      })
    form.reset()
  }

  return (
    <div>
      <div className='login-page'>
        <h2 className='text-center text-2xl font-bold'>Login</h2>
        <form onSubmit={handaleLogin}>
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
            <input className='login-btn' type='submit' value='LOGIN' />
          </div>
        </form>
        <div>
          <p className='text-center mt-2'>
            New to Doctors Portal?{' '}
            <Link className='link-signup' to='/signup'>
              Create new account
            </Link>
          </p>
          <hr />
          <div className='text-center'>
            <button className='google-btn'>CONTINUE WITH GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
