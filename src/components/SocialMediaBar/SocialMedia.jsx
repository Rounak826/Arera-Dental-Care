import React from "react";
import { Facebook, Instagram, MessageSquare,Youtube } from "react-feather";
import "./SocialMedia.css";
import { Link } from "react-router-dom";
export default function SocialMedia() {
  return (
    <div className="SocialMedia-Feedback">
      <div className="Icon-Bar">
        <a
          className="Facebook"
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
        className="Youtube"  >
          <Youtube />
        </a>
        <a
          href="https://instagram.com/arera_dental_care?utm_medium=copy_link"
          target={"_blank"}
          rel="noreferrer"
       className="Instagram"  >
          <Instagram />
        </a>
        <Link to="/Feedback" className="FeedBack">
          <MessageSquare />
        </Link>
      </div>
    </div>
  );
}
