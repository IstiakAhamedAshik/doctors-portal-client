import React, { useEffect, useState } from 'react'
import '../appointment.css'
import { format } from 'date-fns'
import AvailableOption from './AvailableOption'
import BookingModal from '../BookingModal/BookingModal'
const AvailableAppoinment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([])
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    fetch('appointmentOptions.json')
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data))
  }, [])
  const addBooking = (bookingOption) => {
    setBooking(bookingOption)
  }
  return (
    <section className='available-margin'>
      <p className='text-center font-semibold font-color'>
        Available Services on {format(selectedDate, 'PP')}
      </p>
      <div className='available-margin grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {appointmentOptions.map((appointment) => (
          <AvailableOption
            key={appointment._id}
            appointment={appointment}
            addBooking={addBooking}
          ></AvailableOption>
        ))}
      </div>
      <div>
        {booking && (
          <BookingModal
            booking={booking}
            selectedDate={selectedDate}
          ></BookingModal>
        )}
      </div>
    </section>
  )
}

export default AvailableAppoinment
