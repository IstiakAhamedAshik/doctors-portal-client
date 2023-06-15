import React from 'react'

const AvailableOption = ({ appointment, addBooking }) => {
  const { name, slots } = appointment

  return (
    <div className='one-appoinment '>
      <h1 className='text-center text-xl font-semibold font-color'>{name}</h1>
      <h2>{slots.length > 0 ? slots[0] : 'Try AnotherDay'}</h2>
      <h3>
        {slots.length}
        {slots.length > 0 ? ' spaces' : ' space'} Available
      </h3>
      <label
        disabled={slots.length === 0}
        htmlFor='booking-modal'
        className='btn btn-appoinment'
        onClick={() => addBooking(appointment)}
      >
        BOOK APPOINTMENT
      </label>
    </div>
  )
}

export default AvailableOption
