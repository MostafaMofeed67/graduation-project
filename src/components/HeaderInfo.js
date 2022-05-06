import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HeaderInfo = ({ heading, link }) => {
  return (
    <div className="w-full px-5 py-8 bg-primary text-white flex justify-between mb-10 shadow-md">
      <h1 className="text-2xl font-extrabold">{heading}</h1>

      <div className="flex items-center gap-2">
        <Link to="/" className="text-base font-semibold">
          الرئيسية
        </Link>
        <ArrowBackIosNewIcon style={{ fontSize: "13px" }} />
        <Link to={link || "/"} className="text-base font-semibold">
          {heading}
        </Link>
      </div>
    </div>
  );
};

export default HeaderInfo;
