import React from "react";
import "./team.css";
import teamimage from "./profile-pic.png";
import image from "./profile-pic (1).png"
export default function Team() {
  return (
    <div className="Team-Container">
      <h1>Meet Our Team</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="container">
              <img src={teamimage} alt="" />
              <h2>Dr Swapnil Jain</h2>
              <p className="title">BDS, MDS,PGDHM
              </p>
              <p>Certificate in Dental Implants
                Prof and Head,People's Dental Academy
              </p>
              <p>Experience-12 years</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <img src={image} alt="" />
              <h2>Dr Shweta Jain </h2>
              <p className="title">BDS,MSC (Medical),PGDCR
              </p>
              <p>Cosmetic Dentist</p>
              <p>Experiences- 12 years</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <img src={teamimage} alt="" />
              <h2>Dr Ankit Pandey</h2>
              <p className="title">BDS,MDS,Fellowship in TMJ</p>
              <p>Oral and Maxillo Facial Surgeon
                Oral Implantologist
              </p>
              <p>Experience -8 years </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <img src={image} alt="" />
              <h2>Dr  Harsh Mahajan
              </h2>
              <p className="title">BDS,MDS

              </p>
              <p>Oral and Maxilo Facial Prosthesis </p>
              <p>Experience - 14 years</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <img src={teamimage} alt="" />
              <h2>Dr Ankit Pandey</h2>
              <p className="title">BDS,MDS,Fellowship in TMJ</p>
              <p>Oral and Maxillo Facial Surgeon
                Oral Implantologist
              </p>
              <p>Experience -8 years </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
