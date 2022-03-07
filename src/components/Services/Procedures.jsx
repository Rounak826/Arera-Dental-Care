import React from "react";
import "./procedures.css";
import genral from '../../assets/generaltreatment.svg';
import toothfilling from '../../assets/toothfilling.png';
import toothtreatment from '../../assets/toothtreatment.jpg';
import peidatric from '../../assets/peidatric.png';
import gumtreatment from '../../assets/gumtreatment.png';
import dentalimplant from '../../assets/dental implant.png';
import proceduresimg from './Proceduresimg.svg'
import deturs from '../../assets/deturs.png';
import special from '../../assets/special.png';
import toothextraction from "../../assets/tooth-extraction.png";
import { Link } from "react-router-dom";
const list = [
  {
    category: 'Special Dental treatment available in the clinic',
    image: special,
    treatments: [
      'All-on-4 Dental Implants',
      'All-on-6 Dental Implants',
      'Single tooth Implant',
      'Implant Supported bridge',
      'Clear Braces',
      'Invisalign ',
      'Teeth whitening ',
      'Dental Veneers'

    ]
  },
  {
    category: 'General treatments',
    image: genral,
    treatments: [
      'Root Canal treatment ',
      'Single Visit Root Canal Treatment',
      'Metal Braces',
      'Ceramic Braces',
      'Orthodontic Retainer',
      'Braces',
      'Lingual Braces',
      'Metal Braces ',
      'Chipped Tooth Repair',
      'Dental Bridges',
      'PFM Bridge',
      'Porcelain Bridge',
      'Gold Crown',
      'Permanent Crown',
      'PFM Crown',
      'Porcelain Crown',
      'Stainless Steel Crown',
      'Zirconia Crown',
      'Dental X-Ray'
    ]
  },
  {
    category: 'Dentures',
    image:deturs,
    treatments: [
      ' Dentures Adjustment',
      'Dentures Repair',
      'Fixed Partial Dentures',
      'Flexible Partial Dentures',
      'Removable Partial Denture ']
  },
  {
    category: 'Extractions',
    image: toothextraction,
    treatments: [
      'Non-Surgical Extractions',
      'Surgical Extractions',
      'Wisdom Tooth Extraction',
    ]
  },
  {
    category: 'Fillings',
    image: toothfilling,
    treatments: [
      `  Amalgam Filling`,
      ` Glass Ionomer Filling`,
      ` Gold Filling`,
      ` Porcelain Filling`,
      ` Root Filling`,
      `Temporary Filling`,
      ` White Filling`,

    ]
  },
  {
    category: 'Gum treatments',
    image: gumtreatment,
    treatments: [
      ` Gum Depigmentation`,
      ` Gum Surgery`,
      `  Gingival Flap Surgery`,
      `Gum Contouring and Reshaping`


    ]
  },
  {
    category: 'Paediatric Dentist Consultation',
    image:peidatric ,
    treatments: [
      `Pulpotomy`
    ]
  },
  {
    category: ' TEETH TREATMENT',
    image: toothtreatment,
    treatments: [
      `Teeth Cleaning`,
      `Scaling and Root Planing`,
      `Ultrasonic Scaling`,
      `Teeth Contouring and Reshaping`,
      `Teeth Whitening`,
      `Tooth Jewellery`,
      `Treatment of Orofacial Pain`,
      `Veneers`,
      `Composite Veneers`

    ]
  },


]
export const Procedures = () => {
  return (
    <div className="Procedures">
      <div className="Banner">
        <div className="BannerContent">
          <h1>
            SETS THE STANDARDS FOR OUTSTANDING HIGH{" "}
            <span className="Mods">QUALITY</span> CARE AND{" "}
            <span className="Mods">PATIENT SAFETY</span>.
          </h1>
          <Link to={"/BookAppointment"} className="button1">
            Make Appointment +
          </Link>
          <Link to={"/Aboutus"} className="button2">
            Know more
          </Link>
        </div>
        <img src={proceduresimg} alt="" />
      </div>
      <div className="ServiceCards">
        <div className="Header">
          <h1>Our Services</h1>
        </div>

        {
          list.map((category, index) => {
            return (
              <div className="category" key={index}>
                <h2>{category.category}</h2>
                <div className="Row">

                  {
                    //console.log(category.image)
                   category.treatments.map((item, index) => <TreatmentCard key={index} image={category.image} name={item} />)
                  }
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