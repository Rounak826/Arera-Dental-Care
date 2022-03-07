import React, { useState } from "react";
import "./bookappointment.css";
import emailjs from "emailjs-com";
import logo from './whataap logo.png'
import illustration from '../../assets/bookAppointment.svg'
export default function BookAppointment() {

  const [loading, setLoading] = useState(false);

  

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = `https://v1.nocodeapi.com/arera_dental_care/google_sheets/XqcMOoUlqgTXPODl?tabId=Appointment`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['AppointmentForm']
    let data = new FormData(form)
    let row = [
      [data.get("name"), data.get("number"), data.get("email"), data.get("age"), data.get("AppointmentDate"), data.get("AppointmentTime"), data.get("procedure")]
    ]

    console.log(row)
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(row)
    };


    //console.log(data.get("name"));
    fetch(scriptURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        
        console.log(result)
      
        sendEmail(e);
      })
      .catch(error => console.log('error', error));
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fuh5hpb', 'template_c6e20po', e.target, 'qPs5BZrFxbhD7OLFG')
      .then((result) => {
        console.log(result.text);
        setLoading(false)
      }, (error) => {
        console.log(error.text);
        setLoading(false)
      });
    e.target.reset()
  }
  return (
    <div className="AppointmentFormContainer">
      <div className="AppointmentForm">
        <div className="lContent">
          <img src={illustration} alt="" />
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
              id="email"
              name="email"
              placeholder="Your email.."
            />

            <label htmlFor="Age">Age:</label>
            <input type="text" id="age" name="age" placeholder="Your Age.." />

            <div className="row">
              <div className="col">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="AppointmentDate" />
              </div>
              <div className="col">
                <label htmlFor="Time">Time</label>
                <input type="time" id="time" name="AppointmentTime" />
              </div>
            </div>


            <label htmlFor="procedure"></label>
            <input
              type="text"
              id="Procedure"
              name="procedure"
              placeholder="Your Procedure.."
            />
            <button type="submit" value="Book Appointment" name="Book Appointment">{loading ? "Sending..." : "Submit  "}</button>
          </form>
        </div>
      </div>
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=917898777836" rel="noreferrer"  target="_blank">
          <img src={logo} alt='' />
        </a>
      </div>
    </div>
  )
}
