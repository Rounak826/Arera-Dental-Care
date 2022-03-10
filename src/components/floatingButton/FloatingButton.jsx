import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Icon } from '../../assets/book-appointment.svg'
import './floatingbutton.css'
export default function FloatingButton() {
  return (
  <>
    <Link to='/BookAppointment' className='btn-primary floating pc'>Book Appointment + </Link>
    <Link to='/BookAppointment' className='btn-primary floating mobile'><Icon /> </Link>
  </>
    
  )
}
