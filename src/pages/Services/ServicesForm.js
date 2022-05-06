import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import bgImg from "../../images/bgImg.png";
import formBtnImg from "../../images/formBtn.png";
import logoImg from "../../images/logo.png";
import AppContext from "../../store/app-context";
import imgProfile from "../../images/profile.png";
import logoImage from "../../images/UHIA.png";

const ServicesForm = ({ hideFormHandler }) => {
  const {
    employee,
    step2Employee,
    step2EmployeeShowHandler,
    step2EmployeeHideHandler,
    pharmacist,
    step2Pharmacist,
    step2PharmacistShowHandler,
    step2PharmacistHideHandler,
  } = useContext(AppContext);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (employee) {
      step2EmployeeShowHandler();
    } else if (pharmacist) {
      step2PharmacistShowHandler();
    }
  };

  const submitForm2Handler = (e) => {
    e.preventDefault();
    navigate("/");
    step2EmployeeHideHandler();
  };

  const hideSubmitHandler = () => {
    navigate("/");
    step2PharmacistHideHandler();
  };

  if (step2Employee) {
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
          onClick={hideFormHandler}
          className="absolute inset-0  z-10"
          style={{ background: "rgba(2,25,37,0.5411764705882353 )" }}
        ></div>

        <div
          className="absolute top-[50%] left-[50%] bg-white font-black  z-20 rounded-lg text-primary py-5 px-6 w-4/5"
          style={{ transform: "translate(-50%,-50%)" }}
        >
          <h1 className="text-center mb-2 text-3xl">خطاب تحويل المريض</h1>
          <h1 className="text-center mb-3 text-base">اختار نوع خطاب التحويل</h1>

          <div className="flex justify-center mb-5 gap-5">
            <button
              onClick={() => {
                setBtn1((prevState) => !prevState);
                setBtn2(false);
              }}
              className={`border border-primary rounded-full ${
                btn1 && "bg-primary text-white"
              }   py-1 px-5 font-bold transition-colors duration-300`}
            >
              داخل الهيئه
            </button>
            <button
              onClick={() => {
                setBtn2((prevState) => !prevState);
                setBtn1(false);
              }}
              className={`border border-primary rounded-full ${
                btn2 && "bg-primary text-white"
              }   py-1 px-5 font-bold transition-colors duration-300`}
            >
              خارج الهيئه
            </button>
          </div>

          <form
            className="text-2xl flex flex-col gap-5"
            onSubmit={submitForm2Handler}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <label htmlFor="name" className="w-[150px] text-base">
                  رقم الخطاب
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
                <label htmlFor="name" className="w-[150px] text-base">
                  نوع الخدمه
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
                <label htmlFor="name" className="w-[150px] text-base">
                  تاريخ التحويل
                </label>
                <input
                  type="date"
                  id="name"
                  className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <label htmlFor="file1" className="w-[150px] text-base ">
                  ملف الحاله الصحيه
                </label>
                <input
                  type="text"
                  id="file1"
                  className=" w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <label htmlFor="name" className="w-[150px]  text-base">
                  الجهة المحول لها
                </label>
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
  } else if (step2Pharmacist) {
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
          onClick={hideFormHandler}
          className="absolute inset-0  z-10"
          style={{ background: "rgba(2,25,37,0.5411764705882353 )" }}
        ></div>

        <div
          className="absolute top-[50%] left-[50%] bg-white font-black  z-20 rounded-lg text-primary px-8 py-10 w-3/5 flex justify-between"
          style={{ transform: "translate(-50%,-50%)" }}
        >
          <button
            onClick={hideSubmitHandler}
            className="shadow-md shadow-primary-light self-center py-2 px-4 text-xl font-extrabold rounded-md"
          >
            Done
          </button>

          <div className="shadow-md shadow-primary-light rounded-md">
            <div className="flex items-center gap-16 border-b border-gray-300 px-3 py-5">
              <div>
                <h1 className="font-extrabold text-xl">
                  الهيئه العامة للتأمين الصحي
                </h1>
                <h6 className="text-sm text-gray-400 mt-2">
                  مستشفى الفردوس الحكومى
                </h6>
              </div>
              <img src={logoImage} alt="" className="w-20" />
            </div>

            <div className="text-left  p-5 pb-32">
              <div className="mb-10">
                <h1 className="font-extrabold text-xl italic font-serif">
                  Rx / Panadol extra 500 mg
                </h1>
                <h6 className="text-sm text-gray-400 mt-2">
                  مرتين يوميا صباحا و مساءا{" "}
                </h6>
              </div>
              <div>
                <h1 className="font-extrabold text-xl italic font-serif">
                  Rx / Panadol extra 500 mg
                </h1>
                <h6 className="text-sm text-gray-400 mt-2">
                  مرتين يوميا صباحا و مساءا{" "}
                </h6>
              </div>
            </div>

            <div className=" px-3 py-5 border-t border-gray-300 flex justify-between">
              <div>
                <h3>إمضاء الطبيب</h3>
                <span className="w-16 h-16 rounded-full shadow-md inline-block "></span>
              </div>
              <div>
                <h3>ختم التأمين</h3>
                <span className="w-16 h-16 rounded-full shadow-md inline-block "></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
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

            <img src={logoImg} alt="" />
          </div>
        </div>
      </>
    );
  }

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
        onClick={hideFormHandler}
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
              <label htmlFor="name" className="w-[90px] text-base">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="text-base">
                الرقم القومي
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
              <label htmlFor="name" className="w-[90px] text-base">
                السن
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="text-base">
                الرقم التأميني
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
              <label htmlFor="name" className="w-[90px] text-base">
                النوع
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="text-base">
                رقم التليفون
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
              <label htmlFor="name" className="w-[90px] text-base">
                العنوان{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="text-base">
                فصيلة الدم{" "}
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
              <label htmlFor="name" className="w-[90px] text-base">
                الوظيفة{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-64 border-2 border-primary rounded-xl h-12 text-base px-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-8">
              <label htmlFor="name" className="text-base">
                ملف الحالة الصحية
              </label>
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

export default ServicesForm;
