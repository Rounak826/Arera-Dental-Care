import React from "react";
import "./gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide1 from "./Slide1.jpg";
import Slide2 from "./Slide2.jpg";
import Slide3 from "./Slide3.jpg";
export default function Gallery() {
  return (
    <div className="Gallery">
      <div className="Gallery-Header">
        <h1>Explore Our  <span className="Mods">Gallery</span>  !</h1>
      </div>
      <div className="Gallery-Para">
        <p>
          {" "}
          Our administration and support staff all have exceptional people
          skilled and trained to assist you with all the medical enquiries
        </p>
      </div>
      <div className="Slider">
        <Carousel showArrows={true} showStatus={false} thumbWidth={200}>
          <div className="Images">
            <img src={Slide1} alt="" />
          </div>
          <div className="Images">
            <img src={Slide2} alt="" />
          </div>
          <div className="Images">
            <img src={Slide3} alt="" />
          </div>
          <div className="Images">
            <img src={Slide1} alt="" />
          </div>
          <div className="Images">
            <img src={Slide2} alt="" />
          </div>
          <div className="Images">
            <img src={Slide3} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
