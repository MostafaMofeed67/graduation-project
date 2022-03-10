import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import formBtnImg from "../../images/formBtn.png";
import logoImg from "../../images/logo.png";
import bgImg from "../../images/bgImg.png";

const Services = () => {
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="absolute w-full min-h-screen z-10">
        <img
          src={bgImg}
          alt=""
          className="absolute w-full h-[100%] object-cover z-10"
        />
      </div>

      <Header />

      <div
        onClick={navigateToHome}
        className="absolute inset-0  z-10"
        style={{ background: "rgba(2,25,37,0.5411764705882353 )" }}
      ></div>

      <div
        className="absolute top-[50%] left-[50%] bg-white font-black  z-20 rounded-lg text-primary py-5 px-6 w-4/5"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <h1 className="text-center mb-5 text-3xl">بيانات المريض</h1>

        <form
          className="text-2xl flex flex-col gap-5"
          onSubmit={submitFormHandler}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[90px]">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name">الرقم القومي</label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[90px]">
                السن
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name">الرقم التأميني</label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[90px]">
                النوع
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name">رقم التليفون</label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[90px]">
                العنوان{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name">فصيلة الدم </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[90px]">
                الوظيفة{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name">ملف الحالة الصحية</label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <button className="flex justify-center w-fit self-center mt-5">
            <img src={formBtnImg} alt="" className="w-11" />
          </button>
        </form>
      </div>

      <img src={logoImg} alt="" className="absolute bottom-0 z-30 left-40" />
    </>
  );
};

export default Services;
