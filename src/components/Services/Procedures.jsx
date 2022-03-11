import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Circle } from "react-feather";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import All46 from '../../assets/All46 Implant Supported Dentures.jpg';
import CeramicBraces from '../../assets/Ceramic Braces.jpg';
import CosmeticDentalProcedures from '../../assets/Cosmetic Dental Procedures.jpg';
import dentalExtractions from '../../assets/dental Extractions.jpg';
import dentalFillings from '../../assets/dental Fillings.jpg';
import DentalImplant from '../../assets/Dental Implant.jpg';
import Dentures from '../../assets/Dentures.jpg';
import Gumtreatments from '../../assets/Gum treatments.jpg';
import InvisibleBraces from '../../assets/Invisible Braces.jpg';
import PaediatricDentistConsultation from '../../assets/Paediatric Dentist Consultation.jpeg';
import RootCanalTreatments from '../../assets/Root Canal Treatments.jpg';
import RootCanal from '../../assets/Root Canal.png';
import Teethwhitening from '../../assets/Teeth whitening.jpg';
import ToothExtractions from '../../assets/Tooth Extractions.jpg';
import VeneersCrowns from '../../assets/VeneersCrowns.jpg';
import "./procedures.css";
import procedures from './Proceduresimg.svg';

const spc = {
  category: 'Special Dental treatment available in the clinic',
  treatments: [
    {name:' All-on-4/6 Implant Supported Dentures',image:All46},
    {name:' Single tooth Implant', image:DentalImplant},
    {name:'Ceramic Braces',image:CeramicBraces},
    {name:'Invisible Braces', image:InvisibleBraces},
    {name:'Teeth whitening',image:Teethwhitening},
    {name:' Dental Veneers and Crowns',image:VeneersCrowns},
    {name:'Root Canal Treatments',image:RootCanal},
    {name:'Tooth Extractions',image:ToothExtractions}


  ]
}
const list = [
  {
    category: 'Dental Implant:',
    image: DentalImplant,
    treatments: [
      "Single Tooth Implant",
      "lmplants Supported Denture",
      "Implant Supported Bridge",
      " Immediate Implant",
      "Immediate Denture",
    ]
  },
  {
    category: 'Root Canal Treatments',
    image: RootCanalTreatments,
    treatments: [
      'Molar/Premolar/Front tooth Root Canal treatments',
      'Single Visit Root Canal Treatment',
      'Post and Core',
    ]
  },
  {
    category: 'Crown and Bridges',
    image: VeneersCrowns,
    treatments: [
      'PFM Crown',
      'Zirconia Crown (5 years warranty)',
      'Zirconia Crown (10 Years warranty)',
      'Stainless Steel Crown',
      'PFM Bridge',
      'Zirconia Bridge',
      'Stainless Steel Bridge'
    ]
  },
  {
    category: 'Cosmetic Dental Procedures',
    image: CosmeticDentalProcedures,
    treatments: [
      'Root Planing and Curettage',
      'Ultrasonic Scaling',
      'Teeth Contouring and Reshaping',
      'Teeth Whitening',
      'Tooth Jewellery',
      'Porcelain Veneers',
      'Composite Veneers',
    ]
  },
  {
    category: 'Dentures',
    image: Dentures,
    treatments: [
      ' Acrylic Complete Dentures',
      ' Denture Adjustment',
      'Dentures Repair',
      'Fixed Partial Dentures',
      'Flexible Partial Dentures',
      'Removable Partial Denture'
    ]
  },
  {
    category: 'Extractions',
    image: dentalExtractions,
    treatments: [
      'Non-Surgical Extractions',
      'Surgical Extractions',
      'Wisdom Tooth Extraction',
    ]
  },
  {
    category: 'Fillings',
    image: dentalFillings,
    treatments: [
      'Glass Ionomer Filling',
      'Composite Filling',
      'Temporary Filling'

    ]
  },
  {
    category: 'Gum treatments',
    image: Gumtreatments,
    treatments: [
      'Gum Depigmentation',
      'Gum Surgery',
      'Gingival Flap Surgery',
      'Gum Contouring and Reshaping'

    ]
  },
  {
    category: 'Paediatric Dentist Consultation',
    image: PaediatricDentistConsultation,
    treatments: [
      'Pulpotomy',
      'Space Maintainers'

    ]
  },


]
export const Procedures = () => {
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
    <div className="Procedures">
      <div className="Banner">
        <div className="BannerContent">
          <h1>
            SETS THE STANDARDS FOR OUTSTANDING HIGH{" "}
            <span className="Mods">QUALITY</span> CARE AND{" "}
            <span className="Mods">PATIENT SAFETY</span>
          </h1>
          <Link to={"/BookAppointment"} className="button1">
            Make Appointment +
          </Link>
          <Link to={"/Aboutus"} className="button2">
            Know more
          </Link>
        </div>
        <img src={procedures} alt="" />
      </div>
      <div className="special">
        <div className="head">
          <h2>Specialty Treatments</h2>  
        </div>
        <div className="container">
          {
            spc.treatments.map((item,index)=>{
              return(
                <TreatmentCard key={index} image={item.image} name={item.name} />
              )
            })
          } 
        </div>  
      </div>
      <div ref={ref}  className="ServiceCards">
        <div className="Header">
          <h1>General Treatments</h1>
        </div>

        {
          list.map((category, catIndex) => {
            return (
              <div className="category" key={catIndex}>

                <h2>{category.category}</h2>
                <div className={catIndex%2===0?"flex-row-100":"flex-reverse-100"}>
                <motion.div animate={catIndex%2===0?right:left} className="image">
                  <img src={category.image} alt={category.category} />
                </motion.div>
                <div className="list">
                  {
                    //console.log(category.image)
                    category.treatments.map((item, index) => <motion.div animate={catIndex%2===0?right:left} key={index} className="otherTreatment"><Circle/>{item}</motion.div>)
                  }
                </div>
                </div>
                

              </div>
            )
          }



          )
        }
      </div>
    </div>
  );
};

function TreatmentCard(props) {

  let { image, name } = props;
  return (
    <div className="Treatment">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}