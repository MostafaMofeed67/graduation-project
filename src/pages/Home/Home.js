import React from "react";
import Header from "../../components/Header";

import homeImage from "../../images/Health_photo.png";
import eyeImage from "../../images/ic_visibility_2.png";
import readImage from "../../images/ic_message_24px.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <img
        src={homeImage}
        alt=""
        className="w-full object-cover"
        style={{ height: `calc(100vh - 120px)` }}
      />

      <div className="container py-20 flex gap-10 text-white ">
        <div className="flex-1 bg-primary-light rounded-md px-5 pt-8 pb-12 flex flex-col items-center  shadow-lg">
          <div className="w-13 h-9">
            <img src={eyeImage} alt="" className="w-full h-full " />
          </div>
          <h1 className="text-3xl mt-5">الرساله</h1>
          <p className="text-center mt-5">
            أن تكون مصر رائدة عالميا في تقديم الرعاية الصحية وفقا للمعايير
            العالمية مدعومة بالإرادة الوطنية وكفاءة العاملين بها
          </p>
        </div>
        <div className="flex-1 bg-primary rounded-md px-5 pt-8 pb-12 flex flex-col items-center shadow-lg ">
          <div className="w-13 h-9">
            <img src={readImage} alt="" className="w-full h-full " />
          </div>
          <h1 className="text-3xl mt-5">الرؤية</h1>
          <p className="text-center mt-5">
            أن يكون لنا تأثير في تحسين صحة الشعب المصري بتأمين العلاج المناسب
            بجودة عالية وبشكل مستدام
          </p>
        </div>
      </div>

      <div className="bg-primary-dark py-10 text-white">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              القـانـون واللائـحـة الـتنفيـذيـة
            </h1>
            <p className="font-bold">
              قانون نظام التأمين الصحي الشامل واللائحة التنفيذية
            </p>
            <div className="flex items-center gap-10 mt-3">
              <p className="border-2 border-white py-4 px-7">
                قانون رقم 2 لسنة 2018
              </p>
              <p className="border-2 border-white py-4 px-7">
                اللائحة التنفيذية
              </p>
            </div>
          </div>
          <div>
            <p className="bg-primary py-3 mb-5 px-32 text-center font-bold">
              زور فروعنا
            </p>
            <p className="bg-primary py-3 mb-5 px-32 text-center font-bold">
              تحدث معنا
            </p>
            <p className="bg-primary py-3 mb-2 px-32 text-center font-bold">
              الخط الساخن
            </p>
            <p className="border-2 border-white py-3 text-center font-black text-primary-light">
              البريد الإلكتروني info@uhia.gov.eg
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
