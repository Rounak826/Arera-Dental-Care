import React, { useState } from "react";
import './feedback.css'
import Feedbackpana from './Feedbackpana.svg'
export default function Feedback() {

  const [loading, setLoading] = useState(false);
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
      .then(result => {console.log(result)})
      .catch(error => console.log('error', error));
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
            <label htmlFor="firstname">Full Name</label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="Your name.."
            />


            <label htmlFor="subject">Query</label>
            <textarea
              id="subject"
              name="feedback"
              placeholder="Write something.."
            ></textarea>

            <input type="submit" value={loading?"Sending":"Submit"} />
          </form>
        </div>
      </div>
      
    </div>
  );
}
