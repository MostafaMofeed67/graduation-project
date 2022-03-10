import React from "react";

import logo from "../../images/logoBig.png";

const Signin = () => {
  return (
    <div className="w-full min-h-screen  flex flex-row-reverse">
      <img src={logo} alt="" className="ml-2" />

      <div
        className="flex-1 bg-center bg-signupImg bg-cover flex flex-col justify-center items-center"
        style={{
          clipPath: "polygon(33% 0, 0 53%, 33% 100%, 100% 100%, 100% 0)",
        }}
      >
        <form className="flex flex-col gap-12">
          <input
            type="text"
            placeholder="WorkPlace"
            className="rounded-lg h-10 w-96 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary transition-colors"
          />
          <input
            type="text"
            placeholder="User_ID"
            className="rounded-lg h-10 w-96 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary transition-colors"
          />
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg h-10 w-96 px-5 text-left focus:outline-none border-2 border-transparent focus:border-primary transition-colors"
          />

          <button className="uppercase bg-primary-light self-center rounded-2xl py-3 px-6 font-black text-white">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
