import React, { useState } from "react";
import Alert from "../Alert/Alert";
import './feedback.css'
import Feedbackpana from './Feedbackpana.svg'
export default function Feedback() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    message: "",
    error: false
  })
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = `https://v1.nocodeapi.com/arera_dental_care/google_sheets/XqcMOoUlqgTXPODl?tabId=Feedback`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['FeedbackForm']
    let data = new FormData(form)
    let row = [
      [data.get("fullname"), data.get("feedback")]
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
        setMessage(
          {
            status: true,
            message: "Feedback Sent Successfully!",
            error: false
          }
        )
      })
      .catch(error => {
        console.log('error', error)
        setMessage(
          {
            status: true,
            message: "Failed To send Feedback",
            error: false
          }
        )
      });
  }



  return (
    <div className="FeedBackForm">
      <div className="feedbackForm">
        <div className="FeedbackImage">
                <img src={Feedbackpana} alt="" />
          <h1>
            Arera Dental <span className="Mods">Clinic</span>
          </h1>
        </div>
        <div className="Form-1">
          <h1>Give Your Feedback</h1>
          <form name="FeedbackForm" onSubmit= { HandleSubmit } >
          {message.status&&<Alert error={message.error} message={message.message} />}
            <label htmlFor="firstname">Full Name</label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="Your name.."
              required
            />


            <label htmlFor="subject">Feedback</label>
            <textarea
              id="subject"
              name="feedback"
              placeholder="Write something.."
              required
            ></textarea>

            <input type="submit" value={loading?"Sending":"Submit"} />
          </form>
        </div>
      </div>
      
    </div>
  );
}
