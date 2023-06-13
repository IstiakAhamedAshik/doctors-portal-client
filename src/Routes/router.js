import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'
import Appointment from '../pages/Appointment/Appointment'
import Reviews from '../pages/Reviews/Reviews'
import Contuct from '../pages/Contuct/Contuct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/contuct',
        element: <Contuct></Contuct>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
])
