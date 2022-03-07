import React from "react";
import "./bookappointment.css";
export default function BookAppointmentForm() {

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyUEI0pJUneEyIRiC75kAeJxshqaEJa7FQ4hKX9jM8dLZufic9iA2AIHD0hHNncU3o/exec'
  const form = document.forms['AppointmentForm']

  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log("Clicked");
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  }
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
                    or medical enquiry. Our doctors will recive or return any urgent calls.
                </p>
          <form name="AppointmentForm" onSubmit={HandleSubmit}>
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
            <input type="text" id="age" name="age" placeholder="Your Age.." />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="AppointmentDate" />

            <label htmlFor="Time">Time</label>
            <input type="time" id="time" name="AppointmentTime" />
            <label htmlFor="procedure"></label>
            <input
              type="text"
              id="Procedure"
              name="procedure"
              placeholder="Your Procedure.."
            />
            <input type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
    </div>
  );
}
