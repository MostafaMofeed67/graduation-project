import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../helpers/LoadingSpinner";
import useInput from "../../hooks/useInput";

import logo from "../../images/logoBig.png";

const Signin = ({ onIsStarttChange }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: workPlaceName,
    valueChangeHandler: workPlaceChangeHandler,
    inputBlueHandler: workPlaceBlurHandler,
    enteredValueIsValid: workPlaceIsValid,
    enteredValueIsInValid: workPlaceIsInvalid,
  } = useInput((value) => value.trim() !== "");
  const {
    value: userIDName,
    valueChangeHandler: userIDChangeHandler,
    inputBlueHandler: userIDBlurHandler,
    enteredValueIsValid: userIDIsValid,
    enteredValueIsInValid: userIDIsInvalid,
  } = useInput((value) => value.trim() !== "");
  const {
    value: userName,
    valueChangeHandler: userChangeHandler,
    inputBlueHandler: userBlurHandler,
    enteredValueIsValid: userIsValid,
    enteredValueIsInValid: userIsInvalid,
  } = useInput((value) => value.trim() !== "");

  const submitFormHandler = (e) => {
    e.preventDefault();
    onIsStarttChange();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 3000);
  };

  const workPlaceClasses = workPlaceIsInvalid
    ? "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary border-red-500"
    : "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary";
  const userIDClasses = userIDIsInvalid
    ? "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary border-red-500"
    : "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary";
  const userClasses = userIsInvalid
    ? "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary border-red-500"
    : "rounded-lg h-10 w-96 transition-all ease-linear duration-200 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary";

  return (
    <div className="w-full min-h-screen  flex flex-row-reverse">
      <img src={logo} alt="" className="ml-2" />

      <div
        className="flex-1 bg-center bg-signupImg bg-cover flex flex-col justify-center items-center"
        style={{
          clipPath: "polygon(33% 0, 0 53%, 33% 100%, 100% 100%, 100% 0)",
        }}
      >
        <form
          className="flex flex-col gap-10  w-96"
          onSubmit={submitFormHandler}
        >
          <div className="text-left">
            <input
              type="text"
              placeholder="Work Place"
              value={workPlaceName}
              onChange={workPlaceChangeHandler}
              onBlur={workPlaceBlurHandler}
              className={workPlaceClasses}
            />
            {workPlaceIsInvalid && (
              <p className="text-left text-sm mt-1 text-red-500">
                Plase enter a valid Work Place
              </p>
            )}
          </div>
          <div className="text-left">
            <input
              type="text"
              placeholder="User_ID"
              value={userIDName}
              onChange={userIDChangeHandler}
              onBlur={userIDBlurHandler}
              className={userIDClasses}
            />
            {userIDIsInvalid && (
              <p className="text-left text-sm mt-1 text-red-500">
                Plase enter a valid User ID
              </p>
            )}
          </div>

          <div className="text-left">
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={userChangeHandler}
              onBlur={userBlurHandler}
              className={userClasses}
            />
            {userIsInvalid && (
              <p className="text-left text-sm mt-1 text-red-500">
                Plase enter a valid User
              </p>
            )}
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <button
              disabled={!workPlaceIsValid || !userIDIsValid || !userIsValid}
              className="uppercase bg-primary-light self-center rounded-2xl py-3 px-6 font-black text-white disabled:bg-slate-200 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;
