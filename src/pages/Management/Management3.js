import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderInfo from "../../components/HeaderInfo";
import LoadingSpinner from "../../helpers/LoadingSpinner";

const Management3 = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      <HeaderInfo heading="الادارة التنفيذيه" link="/management3" />

      {isLoading ? (
        <div style={{ marginBottom: "30px" }}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex gap-8 justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.9606640270977!2d31.343083484929352!3d30.095312881863777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458158f1f5d20a5%3A0xa0550820c88fa6b3!2zVUhJQSDYp9mE2YfZitim2Kkg2KfZhNi52KfZhdipINmE2YTYqtij2YXZitmGINin2YTYtdit2Yog2KfZhNi02KfZhdmE!5e0!3m2!1sar!2seg!4v1646916811160!5m2!1sar!2seg"
              height="550"
              allowfullscreen=""
              loading="lazy"
              title="management"
              className="mb-10 w-2/3"
            ></iframe>
            <div>
              <h1 className="text-2xl mb-5 font-bold text-[#4BB4E8]">
                العنوان :{" "}
                <span className="text-base text-gray-400">
                  هليوبوليسو،24شارع رشدي باشا
                </span>
              </h1>
              <h1 className="text-2xl mb-5 font-bold text-[#4BB4E8]">
                تليفون :{" "}
                <span className="text-base text-gray-400">+2024187129</span>
              </h1>
              <h1 className="text-2xl mb-5 font-bold text-[#4BB4E8]">
                البريد الإلكتروني :{" "}
                <a
                  href="http://www.hio.gov.eg/Ar/Pages/contactUs.aspx"
                  className="text-base text-gray-400"
                >
                  contact@hio.gov.eg
                </a>
              </h1>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Management3;
