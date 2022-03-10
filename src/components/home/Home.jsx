import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slideone from "./slide1.jpg";
import slidetwo from "./slide2.jpg";
import slidethree from "./slide3.jfif";
import slidefour from "./slide4.jpg";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import introimage from "./introimage.jpg";
import teamimage from "./profile-pic.png";
import image from "./profile-pic (1).png";
import healthlogo1 from "./healthlogo1.svg";
import healthlogo2 from "./healthlogo2.svg";
import healthlogo3 from "./healthlogo3.svg";
import healthlogo4 from "./healthlogo4.svg";
import achievementlogo1 from "./achievementlogo1.svg";
import achievementlogo2 from "./achievementlogo2.svg";
import achievementlogo3 from "./achievementlogo3.svg";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
const List = [
  {
    name: "Smriti Jain",
    feedback:
      `Medical advice and checkup 
      24x7 support
      Proper hygiene
      Online consultation available`,
  },
  {
    name: "Rounak Bisen",
    feedback:
      "Very pleasant indeed! Dr Swapnil Jain is a great doctor who listens to the patient and takes care of him/her with great attention.",
  },
];
export const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Slider">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          <div
            className="Slide"
            style={{ backgroundImage: `url(${slideone})` }}
          >
            <div className="blur">
              <h1>
                Best <span className="Mods">Dental</span> Care For You and Your{" "}
                <span className="Mods">Family</span>
              </h1>
              <p>
                At Arera Dental Care, we are honored for servicing all
                people with the finest dental health care facilities.
              </p>
              <Link to={"/BookAppointment"} className="btn">
                Book Appointment+
              </Link>
            </div>
          </div>
          <div
            className="Slide"
            style={{ backgroundImage: `url(${slidetwo})` }}
          ></div>
          <div
            className="Slide"
            style={{ backgroundImage: `url(${slidethree})` }}
          ></div>
          <div
            className="Slide"
            style={{ backgroundImage: `url(${slidefour})` }}
          ></div>
        </Carousel>
      </div>
      <div className="Introduction1">
        <div className="Intro-Content">
          <div className="Header-Intro">
            <h1>
              Providing Best Dental Care For You and Your{" "}
              <span className="Mods">Family</span> !
            </h1>
          </div>
          <div className="Content-Intro">
            <p>
              At Arera Dental Care, we are honored for servicing all people with the finest dental health care facilities. Our dental care clinic, driven by state-of-the-art infrastructure facilities with a committed & well-trained workforce, has built a niche in the dental market by providing outstanding oral and dental facilities at all levels. We ensure that our patients are treated with the greatest attention and care. Our dental experts use the latest modern tools and technologies to give you an award-winning smile and an elegant look.

            </p>
          </div>
        </div>
        <div className="Youtube-Integration">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dgwJgvdk0K4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="Achievement-div">
        <img src={achievementlogo1} alt="" />
        <h2>
          {" "}
          <span className="Mods">1,000+</span> Cured Patients{" "}
        </h2>
        <img src={achievementlogo2} alt="" />
        <h2>
          <span className="Mods">1,900+</span> Medical Tests{" "}
        </h2>
        <img src={achievementlogo3} alt="" />
        <h2>
          <span className="Mods">10+</span> Years of Experience
        </h2>
      </div>

      <div className="Gallery-div">
        <div className="GalleryHeader">
          <h1>Our Gallery</h1>
          <p>
            Our administration and support staff all have exceptional people
            skilled and trained to assist you with all the medical enquiries
          </p>
        </div>
        <div className="GalleryImages">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div className="GalleryButton">
          <Link to={"/Gallery"} className="Explore-More">
            Explore More!
          </Link>
        </div>
      </div>

      <div className="Introduction-2">
        <div className="Intro-Header">
          <h1>
            We Strive To Provide The{" "}
            <span className="Mods">Best Dental Care </span> !
          </h1>
          <p>
            Our dental care clinic, driven by state-of-the-art infrastructure facilities with a committed & well-trained workforce, has built a niche in the dental market by providing outstanding oral and dental facilities at all levels. We ensure that our patients are treated with the greatest attention and care. Our dental experts use the latest modern tools and technologies to give you an award-winning smile and an elegant look.

            {" "}
          </p>
        </div>
        <div className="Intro-Image">
          <img src={introimage} alt="" />
        </div>
      </div>

      <div className="Team-div">
        <div className="TeamHeader">
          <h1>OUR TEAM</h1>
        </div>
        <div className="Team-div-Content">
          <div className="card">
            <img src={teamimage} alt="" />
            <h3>Dr Swapnil Jain</h3>
            <p className="title">BDS, MDS,PGDHM</p>
            <p>Arera Dental Clinic</p>
          </div>
          <div className="card">
            <img src={image} alt="" />
            <h3>Dr Shweta Jain </h3>
            <p className="title">BDS,MSC (Medical),PGDCR</p>
            <p>Arera Dental Clinic</p>
          </div>
        </div>
        <div className="Team-Button">
          <Link to={"/Team"} className="Team-Button">
            View More!
          </Link>
        </div>
      </div>
      <div className="HealthCard">
        <div className="Card">
          <img src={healthlogo1} alt="" />
          <h3>Medical Advice & Check Ups!
          </h3>
          <p>Consult any of our doctor by vising anytime!</p>
        </div>
        <div className="Card">
          <img src={healthlogo2} alt="" />
          <h3>Trusted medical treatment
          </h3>
          <p>free or low cost covrage with adult income</p>
        </div>
        <div className="Card">
          <img src={healthlogo3} alt="" />
          <h3>Emergency help Available 24 x 7
          </h3>
          <p>Contact our reception staff with any medical emergency anytime!</p>
        </div>
        <div className="Card">
          <img src={healthlogo4} alt="" />
          <h3>Medical Research Professional
          </h3>
          <p>provides all medical aspacts pratices for whole family</p>
        </div>
      </div>
      <div className="testimonial">
        <div className="head">
          <h5>
            See what Patients say about our <span> Dental Services</span>
          </h5>
          <hr />
        </div>
        <div className="carousal">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            {List.map((x, i) => {
              return (
                <div key={i} className="item">
                  <p>"{x.feedback}"</p>
                  <p>-{x.name}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
