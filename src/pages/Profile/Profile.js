import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import imgProfile from "../../images/profile.png";
import formBtnImg from "../../images/formBtn.png";

const Profile = () => {
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
      <Header />
      <div
        onClick={navigateToHome}
        className="absolute inset-0  z-10"
        style={{ background: "rgba(2,25,37,0.5411764705882353 )" }}
      ></div>

      <div
        className="absolute top-[50%] left-[50%] bg-white font-black  z-20 rounded-lg text-primary p-10  w-3/5"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <div className="flex flex-col items-end w-fit mr-auto">
          <div className="w-32 h-32">
            <img
              src={imgProfile}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h4 className="self-center">علياء محمد</h4>
        </div>
        <form
          className="text-2xl flex flex-col gap-5"
          onSubmit={submitFormHandler}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[130px]">
                الاسم رباعى
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[130px]">
                فرع التأمين
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[130px]">
                الرقم القومى
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="w-[130px]">
                رقم الهاتف
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
          </div>

          <button className="flex w-fit self-end mt-2 ml-4">
            <img src={formBtnImg} alt="" className="w-11" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
