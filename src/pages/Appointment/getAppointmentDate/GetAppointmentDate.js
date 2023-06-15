import '../appointment.css'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker'

const GetAppointmentDate = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className='background-pic-appointment'>
      <div className='hero pt-20 pb-40'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={chair} alt='' className='max-w-sm  rounded-lg shadow-2xl' />
          <div className='margin'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetAppointmentDate
