import emailjs from "emailjs-com";
import React, { useState } from "react";
import { AlertCircle } from "react-feather";
import illustration from '../../assets/bookAppointment.svg';
import Alert from '../../components/Alert/Alert';
import "./bookappointment.css";
export default function BookAppointment() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    message: "",
    error: false
  })
  function validateEmail(mail) {
    console.log(mail)
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setMessage({
        status: false,
        message: "",
        error: false
      })
      return true;
    } else {
      setMessage({
        status: true,
        message: "Enter Valid Email",
        error: true
      })
      scrollToTargetAdjusted("Form-alert")
      setLoading(false);
      return false;
    }

  }
  function validatePhone(number) {
    console.log(number);
    if (number.length === 13) {
      setMessage({
        status: false,
        message: "",
        error: false
      })
    } else {
      setMessage({
        status: true,
        message: "Enter Valid Phone Number",
        error: true
      })
      setLoading(false);
      scrollToTargetAdjusted("Form-alert")
    }
    return (number.length === 13);
  }
  function validation(email, phone) {
    let flag = true;
    if (!validateEmail(email)) {
      flag = false;

    } else if (!validatePhone(phone)) {
      flag = false;
    } else {
      flag = true;
    }
    console.log(flag)
    return flag
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = `https://v1.nocodeapi.com/arera_dental_care/google_sheets/XqcMOoUlqgTXPODl?tabId=Appointment`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['AppointmentForm']
    let data = new FormData(form)
    let row = [
      [data.get("name"), data.get("number"), data.get("email"), data.get("age"),data.get("gender"), data.get("AppointmentDate"), data.get("AppointmentTime"), data.get("procedure")]
    ]

    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(row)
    };

    if (
      validation(data.get("email"), data.get("number"))

    ) {
      fetch(scriptURL, requestOptions)
        .then(response => response.text())
        .then(result => {

          console.log(result)

          sendEmail(e);
        })
        .catch(error => console.log('error', error));
    } else {
      console.log(validation(data.get("email"), data.get("number")));
    }
    //console.log(data.get("name"));
    /**/
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fuh5hpb', 'template_c6e20po', e.target, 'qPs5BZrFxbhD7OLFG')
      .then((result) => {
        console.log(result.text);
        setLoading(false)
        setMessage({
          status: true,
          message: "Appointment Booked Successfully!",
          error: false
        })
        scrollToTargetAdjusted("Form-alert")
      }, (error) => {
        console.log(error.text);
        setLoading(false)
        setMessage({
          status: true,
          message: "Failed to Book Appointment!",
          error: true
        })
        scrollToTargetAdjusted("Form-alert")
      });
    e.target.reset()
  }
  return (
    <div className="AppointmentFormContainer">
      <div className="AppointmentForm">

        <div className="lContent">
          <img src={illustration} alt="" />
          <h2>
            Regular Visit is Important To Make Sure Any Health Issue don't Go
            Undiscovered!
          </h2>
          <p>
            With modern,busy lifestyles, it's easy to neglect your health as you
            put everyone else's needs first. So,we're here to care for you and
            your entire family
          </p>
        </div>
        <div className="Form">
          <h1>Book an Appointment</h1>
          <p>Please feel welcome to contact our friendly reception staff with any general
            or medical enquiry. Our doctors will receive or return any urgent calls.
          </p>

          <form name="AppointmentForm" onSubmit={HandleSubmit}>
            {message.status && <Alert error={message.error} message={message.message} />}
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />

            <label htmlFor="name">Contact No</label>
            <input
              type="text"
              id="name"
              name="number"
              placeholder="91-8149931718"
              required
            />
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />

            <div className="row">
              <div className="col">

                <label htmlFor="Age">Age:</label>
                <input type="text" id="age" name="age" placeholder="Your Age.." required />
              </div>
              <div className="col">
                <label htmlFor="gender">Gender</label>
                <select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option> 
                  <option value="Other">Other</option> 
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="AppointmentDate" required />
              </div>
              <div className="col has-tooltip">
                <label htmlFor="Time">Time</label>
                <input type="time" id="time" name="AppointmentTime" required />
                <div className="tooltip"><AlertCircle /><p>Choose time between 6:30 Pm to 9:00 Pm</p></div>
              </div>
              
            </div>


            <label htmlFor="procedure"></label>
            <input
              type="text"
              id="Procedure"
              name="procedure"
              placeholder="Your Procedure.."
              required
            />
            <button type="submit" value="Book Appointment" name="Book Appointment">{loading ? "Sending..." : "Submit  "}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
function scrollToTargetAdjusted(id) {
  var element = document.getElementById(id);
  var headerOffset = 100;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}