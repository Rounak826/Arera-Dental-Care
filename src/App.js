import React from "react";
import "./App.css";
import  Navbar  from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ContactUs } from "./components/contactus/ContactUs";
import { Procedures } from "./components/Services/Procedures";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutus/Aboutus";
import Gallery from "./components/gallery/Gallery";
import Feedback from "./components/feedback/Feedback";
import Team from "./components/team/Team";
import Dentaltraveller from './components/dentaltraveller/Dentaltraveller'
import BookAppointment from "./components/appointmentform/BookAppointment";
import SocialMedia from './components/SocialMediaBar/SocialMedia';
import FloatingButton from './components/floatingButton/FloatingButton';
import {Footer} from './components/footer/Footer'
function App() {
  return (
    <div className="App" id='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Procedures" element={<Procedures />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Team" element={<Team/>} />
          <Route path="/Dental-Traveller" element={<Dentaltraveller/>} />
        </Routes>
      <SocialMedia/>
      <FloatingButton/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
