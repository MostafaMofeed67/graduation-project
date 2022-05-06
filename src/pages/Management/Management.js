import React from "react";

import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import img9 from "../../images/9.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";
import img13 from "../../images/13.png";
import img14 from "../../images/ebrahiem.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderInfo from "../../components/HeaderInfo";

const Management = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="مجلس الاداره" link="/management" />

      <div className="flex flex-col items-center mb-10 ">
        <img src={img12} alt="" className="w-72" />
        <h3 className="mt-2 text-2xl font-extrabold text-[#155B82] ">
          الدكتور/ محمد معيط
        </h3>
        <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
          وزير المالية ورئيس مجلس إدارة الهيئة العامة للتأمين الصحي الشامل
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center mb-16">
        <div className="flex flex-col items-center">
          <img src={img9} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الدكتور/ إيهاب أبو عيش
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            نائب وزير المالية للخزانة العامة ونائب رئيس مجلس إدارة الهيئة العامة
            للتأمين الصحي الشامل
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img14} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/ إبراهيم العربي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الاتحاد العام للغرف التجارية المصرية
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img13} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            المهندس / محمد السويدي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس اتحاد الصناعات المصرية
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/ شريف سامي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس البنك التجاري الدولي وخبير الاستثمار والأسواق المالية
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img7} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الدكتور/ أحمد السبكي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس مجلس إدارة الهيئة العامة للرعاية الصحية
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/ سامي عبدالهادي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            نائب رئيس الهيئة القومية للتأمين الإجتماعي
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img11} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الدكتور/محمد ضاحي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الهيئة العامة للتأمين الصحي
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img8} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الدكتور/ إيهاب أبو المجد
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            ممثل عن مقدمي الخدمة بالقطاع الخص
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img1} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/ جبالي محمد جبالي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الاتحاد العام لنقابات العمال
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img10} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الدكتورة/ هبة نصار
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            خبير في مجال اقتصاديات الصحة
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={img2} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/ حسن الرداد
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس الإدارة المركزية لشئون مكتب وزير القوى العاملة
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={img5} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/علي السيسي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            رئيس قطاع الموازنة العامة وزارة المالية
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={img6} alt="" className="w-72" />
          <h3 className="mt-2 text-2xl font-extrabold text-[#155B82]">
            الأستاذ/وائل عبدالهادي
          </h3>
          <p className="w-48 mt-3 font-bold m-auto text-center text-[#155B82]">
            خبير اكتواري متخصص في اكتواريات الصحة
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Management;
