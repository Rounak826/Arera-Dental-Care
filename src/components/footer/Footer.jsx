import React from "react";
import "./footer.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Mail, MapPin, PhoneCall, Youtube } from "react-feather";
export const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="Row">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>Arera Dental Clinic</h2>
            <div className="time">
              <Clock/>
               <p>6:30 Pm to 9 Pm</p>
            </div>
          </div>
          <div className="quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/AboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"/Procedures"}>Treatments</Link>
              </li>
              <li>
                <Link to={"/Dental-Traveller"}>Dental Tourism</Link>
              </li>
              <li>
                <Link to={"/Gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
             
              <li>
                <Link to={"/BookAppointment"}>Book Appointment</Link>
              </li>
              
              <li>
                <Link to={"/Team"}>Our Team</Link>
              </li>
              <li>
                <Link to={"/Feedback"}>Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact Us:</h3>
            <div className="column">
              
            <div className="row">
            <a
              href="https://www.facebook.com/areradentalclinic/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://youtube.com/c/drswapniljain18"
              target={"_blank"}
              rel="noreferrer"
            >
              <Youtube />
            </a>
            <a
              href="https://instagram.com/arera_dental_care?utm_medium=copy_link"
              target={"_blank"}
              rel="noreferrer"
            >
              <Instagram />
            </a>
            </div>
           
            <div className="col">
              <a href="tel:+91 9893022115"><PhoneCall />+91 9893022115</a>
              <a href="mailto:drswapniljain@yahoo.co.in"><Mail />drswapniljain@yahoo.co.in</a>
              <div className="address">
                <span>
                <MapPin /> 
                </span>
                <p>#28, Manisha Market, opp Shahpura Lake, Bhopal.</p> 
              </div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
