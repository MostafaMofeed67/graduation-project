import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderInfo from "../../components/HeaderInfo";

import img1 from "../../images/OIF.jpg";
import img2 from "../../images/OIP (1).jpg";
import img3 from "../../images/OIP.jpg";

const Reports = () => {
  return (
    <>
      <Header />
      <HeaderInfo heading="التقارير" link="/reports" />

      <div className="my-10 flex flex-col gap-10">
        <a
          href="https://www.uhia.gov.eg/wp-content/uploads/2021/11/%D8%AE%D8%B7%D8%A9-%D8%A7%D8%A7%D9%84%D9%84%D8%AA%D8%B2%D8%A7%D9%85-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A-%D9%88%D8%A7%D8%A7%D9%84%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A.pdf"
          className="w-full bg-primary/10 rounded-xl max-w-5xl mx-auto p-8 flex gap-10"
        >
          <div className="min-w-[300px] max-h-[200px] rounded">
            <img
              src={img3}
              alt=""
              className="w-full h-full min-h-[200px] rounded object-cover"
            />
          </div>

          <div>
            <h1 className="mt-5 text-primary-dark font-extrabold text-xl">
              خطة الإلتزام البيئي والإجتماعي
            </h1>

            <p className="mt-3 text-gray-500">
              تنفیذ معاییر السلامة الاجتماعیة والبیئیة وسلامة المنشآت الخاصة
              بالھیئة العامة للاعتماد والرقابة الصحیة والتي تتماشى مع إرشادات
              مجموعة البنك الدولي للصحة والسلامة والبیئة لمرافق الرعایة الصحیة،
              استنادًا إلى تحلیل الفجوة البیئیة والصحیة والسلامة الذي یتم إجراؤه
              بین مجموعتي المعاییر، بالإضافة إلى معاییر البنك الاجتماعیة ذات
              الصلة
            </p>
          </div>
        </a>

        <a
          href="https://www.uhia.gov.eg/wp-content/uploads/2021/11/%D8%AE%D8%B7%D8%A9-%D8%A5%D8%B4%D8%B1%D8%A7%D9%83-%D8%A3%D8%B5%D8%AD%D8%A7%D8%A8-%D8%A7%D9%84%D9%85%D8%B5%D9%84%D8%AD%D8%A9-%D9%88%D8%A7%D8%A5%D9%84%D9%81%D8%B5%D8%A7%D8%AD-%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf"
          className="w-full bg-primary/10 rounded-xl max-w-5xl mx-auto p-8 flex gap-10"
        >
          <div className="min-w-[300px] max-h-[200px] rounded">
            <img
              src={img2}
              alt=""
              className="w-full h-full rounded object-cover"
            />
          </div>

          <div>
            <h1 className="mt-5 text-primary-dark font-extrabold text-xl">
              خطة إشراك أصحاب المصلحة والإفصاح عن المعلومات
            </h1>

            <p className="mt-3 text-gray-500">
              تتعد خطة اشراك اصحاب المصلحة من اهم الخطط التى تهدف لايجاد علاقة
              بناءة بين البرنامج واصحاب المصالح وذلك لمواصلة الحوار الذى يهدف
              الى تكوين رؤية واضحة لنظام التامين الصحى الشامل ف مصر
            </p>
          </div>
        </a>

        <a
          href="https://www.uhia.gov.eg/wp-content/uploads/2021/11/%D9%85%D9%84%D8%AE%D8%B5-%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A-%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D8%AA%D9%82%D9%8A%D9%8A%D9%85-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A.pdf"
          className="w-full bg-primary/10 rounded-xl max-w-5xl mx-auto p-8 flex gap-10"
        >
          <div className="min-w-[300px] max-h-[200px] rounded">
            <img
              src={img1}
              alt=""
              className="w-full min-h-[200px] rounded object-cover"
            />
          </div>

          <div>
            <h1 className="mt-5 text-primary-dark font-extrabold text-xl">
              ملخص تنفيذي لدراسة تقييم إجتماعي
            </h1>

            <p className="mt-3 text-gray-500">
              استطاعت مصر تحقیق طفرة إیجابیة في المؤشرات الصحیة القومیة على مدى
              العقود الثلاثة الماضیة. غیر أن ھذه التحسینات تتسم بالبطء، ولا تزال
              ھناك تفاوتات على المستوى المحلي. وكانت جودة الرعایة الصحیة
              والنفقات الشخصیة على الرعایة الصحیة یمثلان التحدیین الرئیسیین
              اللذین یعوقان تقدم مصر في النتائج الصحیة
            </p>
          </div>
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Reports;
