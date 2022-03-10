import React, { useState } from "react";
import "./contactus.css";
import contactuslogo from "./contactuslogo.svg";
import { Mail, MapPin, PhoneCall } from "react-feather";
import Alert from "../Alert/Alert";
export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    message: "",
    error: false
  })

 

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = `https://v1.nocodeapi.com/arera_dental_care/google_sheets/XqcMOoUlqgTXPODl?tabId=Query`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['contactUs']
    let data = new FormData(form)
    let row = [
      [data.get("firstname"), data.get("lastname"), data.get("number"),data.get("query")]
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
            message: "Query Sent Successfully!",
            error: false
          }
        )
      })
      .catch(error => {
        console.log('error', error)
        setMessage(
          {
            status: true,
            message: "Failed To send Query",
            error: false
          }
        )
      });
  }

  return (
    <div className="ContactUs">
      <div className="ContactUsForm">
        <div className="ContactUsImage">
          <img src={contactuslogo} alt="" />
          <h2>Arera Dental Clinic</h2>
        </div>
        <div className="form">
          <h1>Contact Us</h1>
          <form name="contactUs" onSubmit={HandleSubmit}>
          {message.status&&<Alert error={message.error} message={message.message} />}
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />

            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              required
            />
            <label htmlFor="number">Contact Number</label>
            <input
              type="text"
              id="lname"
              name="number"
              placeholder="91-8149931718"
              required
            />


            <label htmlFor="subject">Query</label>
            <textarea
              id="subject"
              name="query"
              placeholder="Write something.."
              rows={7}
              required
            ></textarea>

            <input type="submit" value={loading?"Sending...":"Submit"} />
          </form>
        </div>
      </div>
      <div className="Address">
        <iframe
          width="560"
          height="315"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.139128181909!2d77.42348951497104!3d23.20159978486264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9f526fb95%3A0xd5d8a0bd56effde8!2sArera%20Dental%20Care%20(Dr%20Swapnil%20Jain)-%20Shahpura%2FManisha%20Market!5e0!3m2!1sen!2sin!4v1646287049505!5m2!1sen!2sin"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <h1>Address</h1>
          <div className="AddressRow">
            <MapPin/>
            <p>
              #28, Manisha Market, opp Shahpura Lake, Bhopal.
            </p>
          </div>
          <div className="AddressRow">
            <PhoneCall />
            <p>+91 9893022115
            </p>
          </div>
          <div className="AddressRow">
            <Mail/>
            <p>Email Id- drswapniljain@yahoo.co.in
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};