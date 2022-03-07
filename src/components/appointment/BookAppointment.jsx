import React from "react";
import "./bookappointment.css";
export default function BookAppointmentForm() {
  
  return (
    <div className="AppointmentFormContainer">
      <div className="AppointmentForm">
        <div className="lContent">
          <h2>
            Regular Visit is Important To Make Sure Any Health Issues don't Go
            Undiscovered!!
          </h2>
          <p>
            With modern,busy lifestyles, it's easy to neglect your health as you
            put everyone else's needs first. So,we're here to care for you and
            your entire family
          </p>
        </div>
        <div className="Form">
        <h1>Book An Appointment</h1>
                <p>Please feel welcome to contact our friendly reception staff with any general
                    or medical enquiry. Our doctors will receive or return any urgent calls.
                </p>
          <form name="AppointmentForm" >
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />

            <label htmlFor="name">Contact No</label>
            <input
              type="text"
              id="name"
              name="number"
              placeholder="Your number.."
            />
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="name"
              name="email"
              placeholder="Your email.."
            />

            <label htmlFor="Age">Age:</label>
            <input  type="text" id="age" name="age" placeholder="Your Age.." />
            <label htmlFor="date">Date:</label>
            <input className="Date" type="date" id="date" name="appointmentdate" />

            <label htmlFor="Time">Time</label>
            <input className="Time" type="time" id="time" name="appointmenttime" />
            <label htmlFor="procedure"></label>
            <input
              type="text"
              id="Procedure"
              name="procedure"
              placeholder="Your Procedure.."
            />
            <input className="Book-Button" type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
    </div>
  );
}
