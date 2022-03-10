import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Menu, PhoneCall, X } from "react-feather";
import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg'
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png"
export default function Navbar() {
  let location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setPosition] = useState(0);
  const [route, setRoute] = useState('/');
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

  useEffect(() => {
    setRoute(location.pathname);
  }, [location])

  useEffect(() => {


    if(showMenu){
      let app  = document.getElementById('empty');
      app.addEventListener('click', function() {
         setShowMenu(false)
      })
    }
    
  }, [showMenu])

  return (
    <>
      <nav
        className={`${scrollPosition > 50 ? "solid" : "transparent"}`}
      >
        <div className="logo">
          <img src={logo} alt="" />
          <div className="col">
            <h1>Arera</h1>
            <span>Dental Care</span>
          </div>
        </div>

        <div className="links">
          <Link to="/" className={route === "/" ? "Active" : ""}>Home</Link>
          <Link to="/AboutUs" className={route === "/AboutUs" ? "Active" : ""}>About Us</Link>
          <Link to="/Procedures" className={route === "/Procedures" ? "Active" : ""}>Treatments</Link>
          <Link to="/Dental-Traveller" className={route === "/Dental-Traveller" ? "Active" : ""}>Dental Tourism</Link>
          <Link to="/Gallery" className={route === "/Gallery" ? "Active" : ""}>Gallery</Link>
          <Link to="/ContactUs" className={route === "/ContactUs" ? "Active" : ""}>Contact Us</Link>
        </div>
        <div className="info">
          <div className="col">
            <h4>Call Us At</h4>
            <div className="row">
              <PhoneCall /> <a href="tel:+919893022115">+919893022115</a>
            </div>
          </div>
          <div className="col">
            <h4>For Online Consultation</h4>
            <div className="row">
              <Whatsapp /> <a href="https://api.whatsapp.com/send?phone=917880008868" rel="noreferrer" target="_blank">Consult Online</a>
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
            <div className="empty" id='empty'>
            
            </div>
            <div className="bar">
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
              <Link to="/" className={route === "/" ? "Active" : ""}>Home</Link>
              <Link to="/AboutUs" className={route === "/AboutUs" ? "Active" : ""}>About Us</Link>
              <Link to="/Procedures" className={route === "/Procedures" ? "Active" : ""}>Treatments</Link>
              <Link to="/Dental-Traveller" className={route === "/Dental-Traveller" ? "Active" : ""}>Dental Tourism</Link>
              <Link to="/Gallery" className={route === "/Gallery" ? "Active" : ""}>Gallery</Link>
              <Link to="/ContactUs" className={route === "/ContactUs" ? "Active" : ""}>Contact Us</Link>
              <div className="info">
                <div className="col">
                  <h4>Call Us At</h4>
                  <div className="row">
                    <PhoneCall /> <a href="tel:+919893022115">+919893022115</a>
                  </div>
                </div>
                <div className="col">
                  <h4>For Online Consultation</h4>
                  <div className="row">
                    <Whatsapp /><a href="https://api.whatsapp.com/send?phone=917898777836" rel="noreferrer" target="_blank">Consult Online</a>
                  </div>
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
