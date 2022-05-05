import React, { useContext } from "react";

import logo from "../../../images/logoBig.png";
import patient from "../../../images/patient.webp";
import employee from "../../../images/emplyee.webp";
import pharmacist from "../../../images/pharmacist.jpg";
import { Link } from "react-router-dom";
import AppContext from "../../../store/app-context";

const StartPage = () => {
  const {
    choosePatientHandler,
    chooseEmployeeHandler,
    choosePharmacistHandler,
  } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-96" />
      </div>
      <h1 className="text-center -mt-24 mb-10 text-3xl font-extrabold">
        أنت أي شخص
      </h1>
      <div className="flex gap-10 justify-center items-center ">
        <Link
          to="/signin"
          className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
          onClick={() => choosePatientHandler()}
        >
          <div className="h-64 rounded-lg overflow-hidden shadow-md w-60">
            <img src={patient} alt="patient" className="h-64" />
          </div>
          <h1 className="text-center  text-xl mt-5 font-bold">مريض</h1>
        </Link>
        <Link
          to="/signin"
          className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
          onClick={() => chooseEmployeeHandler()}
        >
          <div className="h-64 rounded-lg overflow-hidden shadow-md w-60 ">
            <img src={employee} alt="employee" className="h-64" />
          </div>
          <h1 className="text-center  text-xl mt-5 font-bold">موظف</h1>
        </Link>
        <Link
          to="/signin"
          className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
          onClick={() => choosePharmacistHandler()}
        >
          <div className="h-64 rounded-lg overflow-hidden shadow-md w-60">
            <img src={pharmacist} alt="pharmacist" className="h-64" />
          </div>
          <h1 className="text-center  text-xl mt-5 font-bold">صيدلي</h1>
        </Link>
      </div>
    </>
  );
};

export default StartPage;
