import React, { useState } from 'react'
import GetAppointmentDate from './getAppointmentDate/GetAppointmentDate'
import AvailableAppoinment from './AvailableAppoinment/AvailableAppoinment'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <div>
      <GetAppointmentDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></GetAppointmentDate>
      <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
    </div>
  )
}

export default Appointment
