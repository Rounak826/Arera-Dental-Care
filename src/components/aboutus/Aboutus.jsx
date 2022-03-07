import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import "./aboutus.css";
import logo from "./Personal goals-rafiki.svg";
import log from "./Social ideas-amico.png";
import picture from "./Doctor-pana.svg";
export default function Aboutus() {
  const { ref, inView } = useInView();
  const left = useAnimation();
  const right = useAnimation();
  useEffect(() => {
    if (inView) {
      right.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
      left.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    }
    if (!inView) {
      right.start({
        x: "+50vw",
        opacity: 0.1,
      });
      left.start({
        x: "-50vw",
        opacity: 0.1,
        transition: {
          duration: 0.1,
        },
      });
    }
  }, [inView, left, right]);

  return (
    <div className="aboutus">
      <Card2
        img={picture}
        heading={"Who We Are ?"}
        contents={`At Arera Dental Care, we are honoured for servicing all people with the finest dental health care facilities.\n
            Our dental care clinic, driven by state-of-the-art infrastructure facilities with a committed & well-trained workforce, has built a niche in the dental market by providing outstanding oral and dental facilities at all levels. We ensure that our patients are treated with the greatest attention and care. Our dental experts use the latest modern tools and technologies to give you an award-winning smile and an elegant look.
            `}
      ></Card2>
      <Card1
        img={log}
        heading={"Our Vision"}
        contents={`Our dental care clinic, has to built a niche in the dental market by providing outstanding oral and dental facilities at all levels.  Since its establishment, we have been committed to providing the best by using the most advanced technology available and provide a complete range of dental care. `}
      ></Card1>

      <Card2
        img={logo}
        heading={"Our Mission"}
        contents={`Since its establishment, we have been committed to providing the best by using the most advanced technology available and provide a complete range of dental care. Our qualified professional orthodontists are specialized in all types of solutions for dental care. No matter how simple or complex the requirement of our patient is in comfortable environments we are able to provide the highest standard of patient care. We would make you feel like part of our family when you first connect with our team and enjoy your new smile with family and friends.  `}
      ></Card2>
      <div className="responsibility">
        <div className="head">
          <h2>Our Key Responsibilities</h2>
        </div>
        <div ref={ref} className="col">
          <ul>
            <motion.li animate={left}>
              Accurately assess your dental condition
            </motion.li>
            <motion.li animate={right}>
              Educate you about tooth replacement and other options
            </motion.li>
            <motion.li animate={left}>
              Care for your overall well-being
            </motion.li>
            <motion.li animate={right}>
              Provide security, convenience and protection in a warm and
              friendly atmosphere
            </motion.li>
            <motion.li animate={left}>
              Support to get the treatments you need and expect at affordable
              cost
            </motion.li>
            <motion.li animate={right}>
              Provide after-treatment supportive dental services to help you
              maintain excellent results
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Card1(props) {
  return (
    <div className="card">
      <div className="image slideleft">
        <img src={props.img} alt="" />
      </div>
      <div
        className="content slideright"
        style={{ backgroundImage: `url(${props.back})` }}
      >
        <h1>{props.heading}</h1>
        <p>{props.contents}</p>
      </div>
    </div>
  );
}
function Card2(props) {
  return (
    <div className="card">
      <div
        className="content slideleft"
        style={{ backgroundImage: `url(${props.back}` }}
      >
        <h1>{props.heading}</h1>
        <p>{props.contents}</p>
      </div>
      <div className="image slideright">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
