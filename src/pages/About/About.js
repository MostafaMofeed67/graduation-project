import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderInfo from "../../components/HeaderInfo";

import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="عن النظام" link="/about" />

      <div className="flex justify-center mb-14 mt-5">
        <img src={aboutImg} alt="" />
      </div>

      <Footer />
    </>
  );
};

export default About;
