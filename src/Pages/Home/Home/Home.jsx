import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DentalCare from "../DentalCare/DentalCare";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoointment from "../MakeAppoointment/MakeAppoointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <DentalCare />
      <MakeAppoointment />
      <Testimonial />
      <ContactUs/>
    </div>
  );
};

export default Home;
