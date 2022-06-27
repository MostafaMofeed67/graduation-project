import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../helpers/LoadingSpinner";
import employee from "../../../images/emplyee.webp";
import logo from "../../../images/logoBig.png";
import patient from "../../../images/patient.webp";
import pharmacist from "../../../images/pharmacist.jpg";
import AppContext from "../../../store/app-context";

const StartPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const goToSigninPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/signin");
    }, 3000);
  };

  const {
    choosePatientHandler,
    chooseEmployeeHandler,
    choosePharmacistHandler,
  } = useContext(AppContext);

  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  } else {
    content = (
      <>
        <div className="flex gap-10 justify-center items-center ">
          <div
            className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
            onClick={() => {
              goToSigninPage();
              choosePatientHandler();
            }}
          >
            <div className="h-64 rounded-lg overflow-hidden shadow-md w-60">
              <img src={patient} alt="patient" className="h-64" />
            </div>
            <h1 className="text-center  text-xl mt-5 font-bold">مريض</h1>
          </div>
          <div
            className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
            onClick={() => {
              goToSigninPage();
              chooseEmployeeHandler();
            }}
          >
            <div className="h-64 rounded-lg overflow-hidden shadow-md w-60 ">
              <img src={employee} alt="employee" className="h-64" />
            </div>
            <h1 className="text-center  text-xl mt-5 font-bold">موظف</h1>
          </div>
          <div
            className="text-center cursor-pointer hover:scale-105 transition-all ease-in-out  duration-500"
            onClick={() => {
              goToSigninPage();
              choosePharmacistHandler();
            }}
          >
            <div className="h-64 rounded-lg overflow-hidden shadow-md w-60">
              <img src={pharmacist} alt="pharmacist" className="h-64" />
            </div>
            <h1 className="text-center  text-xl mt-5 font-bold">صيدلي</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-96" />
      </div>
      <h1 className="text-center -mt-24 mb-10 text-3xl font-extrabold">
        أنت أي شخص
      </h1>
      {content}
    </>
  );
};

export default StartPage;
