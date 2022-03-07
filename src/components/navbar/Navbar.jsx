import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Menu, PhoneCall, X } from "react-feather";
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg'
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "./Pnglogo.svg";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <nav
        className={`${scrollPosition > 50 ? "solid" : "transparent"}`}
      >
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Procedures">Treatments</Link>
          <Link to="/Gallery">Our Gallery</Link>
          <Link to="/Dental-Traveller">Dental Traveller</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
        <div className="info">
          <div className="col">
            <h3>Call Us At</h3>
            <div className="row">
              <PhoneCall /> <a href="tel:+919893022115">+919893022115</a>
            </div>
          </div>
          <div className="col">
            <h3>For Online Consultation</h3>
            <div className="row">
              <Whatsapp /> <a href="tel:+919893022115">Consult Online</a>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="menu"
        >
          <Menu />
        </button>


      </nav>
      {showMenu && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "+10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: "+10vw" }}
            className="sideBar"
          >
            <div className="top">
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="menu"
              >
                <X />
              </button>
            </div>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/Procedures">Procedures</Link>
              <Link to="/Gallery">Our Gallery</Link>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/ContactUs">Contact Us</Link>
              <div className="info">
                <div className="col">
                  <h3>Call Us At</h3>
                  <div className="row">
                    <PhoneCall /> <a href="tel:+919893022115">+919893022115</a>
                  </div>
                </div>
                <div className="col">
                  <h3>For Online Consultation</h3>
                  <div className="row">
                    <Whatsapp /> <a href="tel:+919893022115">Consult Online</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
