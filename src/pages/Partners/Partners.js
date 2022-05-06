import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderInfo from "../../components/HeaderInfo";

import img1 from "../../images/Screenshot (179).png";
import img2 from "../../images/Screenshot (180).png";
import img3 from "../../images/Screenshot (181).png";
import img4 from "../../images/Screenshot (182).png";
import img5 from "../../images/Screenshot (183).png";
import img6 from "../../images/Screenshot (184).png";

const Partners = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="شركاء النجاح" link="/partners" />

      <div className="grid grid-cols-3 justify-items-center">
        <div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
        <div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
