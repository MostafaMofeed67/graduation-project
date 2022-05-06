import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ArticleIcon from "@mui/icons-material/Article";

import service1Img from "../../../images/service1 (1).jpg";
import service2Img from "../../../images/service2 (2).jpg";
import service3Img from "../../../images/service3 (3).jpg";
import { Link } from "react-router-dom";
import HeaderInfo from "../../../components/HeaderInfo";

const PatientServices = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="الخدمات" link="/services" />

      <div className="flex justify-center items-center gap-10 mb-10">
        <Link
          to="/services/s1"
          className="border border-primary flex flex-col items-center min-h-[500px] max-w-md rounded-md p-8 shadow-lg "
        >
          <div className="image">
            <img
              src={service1Img}
              alt=""
              className="w-48 h-48 rounded-full border-primary border-2 p-2 mb-8"
            />
          </div>
          <div className="content flex flex-col items-center">
            <h3 className="text-xl w-4/5 font-extrabold mx-auto text-center text-gray-600 ">
              {" "}
              سياسات وإجراءات التحويل
            </h3>
            <span className="fill-current text-primary text-2xl text-center mt-8 ">
              <ArticleIcon style={{ fontSize: "60px", textAlign: "center" }} />
            </span>
          </div>
        </Link>

        <Link
          to="/services/s2"
          className="border border-primary flex flex-col min-h-[600px] max-w-md items-center rounded-md p-8 shadow-lg "
        >
          <div className="image">
            <img
              src={service2Img}
              alt=""
              className="w-48 h-48 rounded-full border-primary border-2 p-2 mb-8"
            />
          </div>

          <div className="content flex flex-col items-center">
            <h3 className="text-xl w-3/5 font-extrabold mx-auto text-center text-gray-600 ">
              دخول العميل لمستشفى متعاقد مع التأمين الصحى في حالات الطوارئ
            </h3>
            <span className="fill-current text-primary text-2xl text-center mt-8 ">
              <ArticleIcon style={{ fontSize: "60px", textAlign: "center" }} />
            </span>
          </div>
        </Link>

        <Link
          to="/services/s3"
          className="border border-primary flex flex-col items-center min-h-[500px] max-w-md rounded-md p-8 shadow-lg "
        >
          <div className="image">
            <img
              src={service3Img}
              alt=""
              className="w-48 h-48 rounded-full border-primary border-2 p-2 mb-8"
            />
          </div>
          <div className="content flex flex-col items-center">
            <h3 className="text-xl w-3/5 font-extrabold mx-auto text-center text-gray-600 ">
              نقل الخدمات الطبيه بين الفروع{" "}
            </h3>
            <span className="fill-current text-primary text-2xl text-center mt-8 ">
              <ArticleIcon style={{ fontSize: "60px", textAlign: "center" }} />
            </span>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default PatientServices;
