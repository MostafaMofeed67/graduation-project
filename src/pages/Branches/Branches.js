import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderInfo from "../../components/HeaderInfo";
import LoadingSpinner from "../../helpers/LoadingSpinner";

const Branches = () => {
  const [luxur, setLuxur] = useState(true);
  const [portsaid, setPortsaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const luxurChangeHandler = () => {
    setLuxur(true);
    setPortsaid(false);
  };
  const portsaidChangeHandler = () => {
    setLuxur(false);
    setPortsaid(true);
  };

  return (
    <>
      <Header />
      <HeaderInfo heading="الفروع" link="/branches" />

      <div className="flex gap-5 justify-center mb-8">
        <div
          className="bg-[#4bb4e89a] py-6 px-10 rounded-md text-center shadow-md cursor-pointer "
          onClick={luxurChangeHandler}
        >
          <h1 className="text-white text-3xl font-extrabold mb-2">
            فرع الأقصر
          </h1>
          <p className="text-white text-base font-bold">
            شارع علي ابن أبي طالب ، متفرع من شارع التليفزيون هاتف : 0952281227
          </p>
        </div>
        <div
          className="bg-[#4bb4e89a] py-6 px-10 rounded-md text-center shadow-md cursor-pointer "
          onClick={portsaidChangeHandler}
        >
          <h1 className="text-white text-3xl font-extrabold mb-2">
            فرع بورسعيد
          </h1>
          <p className="text-white text-base font-bold">
            امتداد شارع كسرى أمام السكة الحديد ،مجمع الهيئات هاتف : 0663260775 -
            066326074
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-5 font-bold text-[#4BB4E8]">
          {luxur && "فرع الأقصر"}
          {portsaid && "فرع بورسعيد"}
        </h2>

        {isLoading ? (
          <div style={{ marginBottom: "30px" }}>
            <LoadingSpinner />
          </div>
        ) : portsaid ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.5366952267727!2d32.304022784900845!3d31.261246581456145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99d59fb0e3229%3A0x6c7e627a08bd6645!2z2YXYrNmF2Lkg2YfZitim2KfYqiDYp9mE2KrYo9mF2YrZhiDYp9mE2LXYrdmKINin2YTYtNin2YXZhA!5e0!3m2!1sar!2seg!4v1646901290860!5m2!1sar!2seg"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="portsaid"
            className="mb-10 w-3/4"
          ></iframe>
        ) : luxur ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7190.821028990874!2d32.645397675000794!3d25.690828784675787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144914327e2cb17b%3A0xfd1627aab8ce7cb1!2z2KfZhNmH2YrYptipINin2YTYudin2YXYqSDZhNmE2KrYo9mF2YrZhiDYp9mE2LXYrdmJIC0g2KfZhNin2YLYtdix!5e0!3m2!1sar!2seg!4v1646911312465!5m2!1sar!2seg"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="luxur"
            className="mb-10 w-3/4"
          ></iframe>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default Branches;
