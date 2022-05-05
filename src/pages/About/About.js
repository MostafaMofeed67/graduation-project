import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center">
        <img src={aboutImg} alt="" />
      </div>

      <Footer />
    </>
  );
};

export default About;
