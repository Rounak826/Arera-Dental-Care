import React from 'react'
import { PlusCircle } from 'react-feather'
import { Link } from 'react-router-dom'
import './floatingbutton.css'
export default function FloatingButton() {
  return (
  <>
    <Link to='/BookAppointment' className='btn-primary floating pc'>Book Appointment + </Link>
    <Link to='/BookAppointment' className='btn-primary floating mobile'><PlusCircle/> </Link>
  </>
    
  )
}
