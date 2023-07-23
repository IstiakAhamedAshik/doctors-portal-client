import React from 'react'
import { format } from 'date-fns'
const BookingModal = ({ booking, selectedDate }) => {
  const { name, slots } = booking
  const addPatient = (event) => {
    event.preventDefault()
    const form = event.target
    const date = form.date.value
    const time = form.time.value
    const fullName = form.name.value
    const phone = form.phone.value
    const email = form.email.value

    const booking = {
      appointmentDate: date,
      appiontmentTime: time,
      fullName,
      phone,
      email,
      treatmentName: name,
    }
    console.log(booking)
  }
  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>{name}</h3>
          <div className='form-modal'>
            <form onSubmit={addPatient}>
              <input
                className='input-black'
                type='text'
                name='date'
                disabled
                defaultValue={format(selectedDate, 'PP')}
              />
              <select name='time' id=''>
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                className='input-border'
                type='text'
                name='name'
                placeholder='Full Name'
              />
              <input
                className='input-border'
                type='text'
                name='phone'
                placeholder='Phone Number'
              />
              <input
                className='input-border'
                type='email'
                name='email'
                placeholder='Email'
              />
              <input className='modal-submit' type='submit' value='SUBMIT' />
            </form>
          </div>
          <div className='modal-action'>
            <label htmlFor='booking-modal' className='btn'>
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
export default BookingModal
