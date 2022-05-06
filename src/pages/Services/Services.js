import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import exitBtn from "../../images/exitBtn.png";
import homeBtn from "../../images/homeBtn.png";
import bgImg2 from "../../images/Hospital-Case-S.png";
import AppContext from "../../store/app-context";
import PatientServices from "./PatientServices/PatientServices";
import ServicesForm from "./ServicesForm";

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => setShowForm(true);
  const hideFormHandler = () => setShowForm(false);

  const { patient, employee, pharmacist } = useContext(AppContext);

  if (patient) {
    return <PatientServices />;
  } else if (employee || pharmacist) {
    if (showForm) {
      return <ServicesForm hideFormHandler={hideFormHandler} />;
    }

    return (
      <>
        <img src={bgImg2} alt="" className="h-96 w-full object-cover" />

        <div className="max-w-5xl w-full mx-auto mt-11 rounded-md p-3 relative border-[#06bac0] border border-solid text-center">
          <h1 className="text-xl font-extrabold absolute -top-4 px-3  right-10 bg-white">
            الإستعلام عن المريض
          </h1>

          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="أدخل الرقم القومي"
              className="w-[50%] mt-8  p-3 mx-auto rounded-xl h-11 text-xl  focus:outline-none shadow-sm shadow-[#06bac0]"
            />
            <input
              type="text"
              id="name"
              placeholder="رقم بطاقه التأمين"
              className="w-[50%] mt-7  mb-14  p-3 mx-auto rounded-xl h-11 text-xl  focus:outline-none shadow-sm shadow-[#06bac0]"
            />
          </div>

          <div className="flex justify-between px-5">
            <img
              src={exitBtn}
              alt=""
              className="w-10 cursor-pointer"
              onClick={showFormHandler}
            />
            <Link to="/">
              <img src={homeBtn} alt="" className="w-10 cursor-pointer" />
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default Services;
