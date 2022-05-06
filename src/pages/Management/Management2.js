import React from "react";

import img19 from "../../images/19.png";
import img14 from "../../images/14.png";
import img16 from "../../images/16.png";
import img18 from "../../images/18.png";
import img17 from "../../images/17.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderInfo from "../../components/HeaderInfo";

const Management2 = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="الادارة التنفيذيه" link="/management2" />

      <div className="flex flex-col items-center mb-10">
        <img src={img19} alt="" className="w-72" />
        <h3 className="mt-2 text-xl font-extrabold text-[#155B82] ">
          المهندس/ حسام صادق
        </h3>
        <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
          المدير التنفيذي
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center mb-16">
        <div className="flex flex-col items-center">
          <img src={img14} alt="" className="w-72" />
          <h3 className="mt-2 text-xl font-extrabold text-[#155B82]">
            المهندس/محمود صبري
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الإدارة المركزية لنظم المعلومات والتحول الرقمي
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img16} alt="" className="w-72" />
          <h3 className="mt-2 text-xl font-extrabold text-[#155B82]">
            الأستاذ/شريف الشريف
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الإدارة المركزية لشئون المستفيدين
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img17} alt="" className="w-72" />
          <h3 className="mt-2 text-xl font-extrabold text-[#155B82]">
            الأستاذ/عمرو ذكي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الإدارة المركزية للشئون المالية
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img18} alt="" className="w-72" />
          <h3 className="mt-2 text-xl font-extrabold text-[#155B82]">
            الدكتور/أشرف موافي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الإدارة المركزية للمطالبات
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Management2;
