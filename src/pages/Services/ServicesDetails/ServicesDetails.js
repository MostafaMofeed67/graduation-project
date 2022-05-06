import React from "react";
import { useParams } from "react-router-dom";

import service1Img from "../../../images/service1 (1).jpg";
import service2Img from "../../../images/service2 (2).jpg";
import service3Img from "../../../images/service3 (3).jpg";

import StarIcon from "@mui/icons-material/Star";

const ServicesDetails = () => {
  let { id } = useParams();

  return (
    <div className="w-full min-h-screen bg-[#eee] py-10 px-12">
      <h1 className="text-3xl mb-10 font-extrabold text-primary-dark text-center mt-16">
        {id === "s1"
          ? "سياسات وإجراءات التحويل"
          : id === "s2"
          ? "دخول العميل لمستشفى متعاقد مع التأمين الصحى في حالات الطوارئ"
          : "نقل الخدمات الطبيه بين الفروع"}
      </h1>

      <div className="flex justify-between  gap-16">
        <div>
          <div>
            <h6 className="text-primary text-2xl font-extrabold">
              {id === "s1"
                ? "في حالة عدم توافر الخدمة في الجهات التابعة للهيئة يكون التحويل علي النحو التالي :"
                : "المستندات"}
            </h6>
            {id === "s3" && (
              <div className="flex mt-2 pr-5 gap-2 text-primary">
                <StarIcon
                  style={{
                    fontSize: "10px",
                    marginTop: "10px",
                    fill: "currentcolor",
                  }}
                />
                <p className="text-xl text-primary-dark  ">
                  خطاب من جهة عمل الموظف معتمد ومختوم بالموافقة علي نقل الخدمة
                  الطبيه او خطاب من الفرع التابع له العميل للفرد المراد النقل
                  اليه
                </p>
              </div>
            )}

            {id === "s2" && (
              <>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    تقرير طبي بحالة المريض من المستشفى المحجوز بها
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    خطاب من جهة العمل للموظفين
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    بطاقة التأمين الصحي
                  </p>
                </div>
              </>
            )}
            {id === "s1" && (
              <>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    مستشفيات وزارة الصحة (م.عام - م.تابعة للمؤسسات العلاجية م.
                    تابعة للأمانة العامة )
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    المستشفيات التعليمية
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    المستشفيات الجامعية
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    مستشفيات القوات المسلحة والشرطة
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    المستشفيات والمراكز المتخصصة
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    مراكز الأشعة المتعاقد معها ( في حال عدم توافر الخدمة في
                    الهيئة )
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    معامل التحاليل المتعاقد معها (في حال عدم توافر الخدمة في
                    الهيئة){" "}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="mt-8">
            {id === "s1" ? (
              ""
            ) : (
              <h6 className="text-primary text-2xl font-extrabold">
                الاجراءات
              </h6>
            )}
            {id === "s3" && (
              <>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark ">
                    خيتقدم العميل بخطاب الفرع أو خطاب جهة العمل أو طلب الإلتماس
                    بالنسبة للأرامل أو المعاشات لنقل الخدمة الطبيه في الفرع
                    الأصلي إلي الفرع البديل
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark">
                    خيتم تحرير خطاب نقل خدمة بين الفروع محددة المدة الفرع البديل
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark ">
                    يسجل نقل الخدمة في أصل البطاقة الصحية للعميل
                  </p>
                </div>
              </>
            )}

            {id === "s2" && (
              <>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    إذا كان تاريخ الإبلاغ خلال ٤٨ ساعة نقوم بإصدار خطاب الدخول
                  </p>
                </div>
                <div className="flex mt-2 pr-5 gap-2 text-primary">
                  <StarIcon
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      fill: "currentcolor",
                    }}
                  />
                  <p className="text-xl text-primary-dark  ">
                    إذا كان تاريخ الإبلاغ بعد ٤٨ ساعه يتم عمل زيارة من أقرب
                    عيادة تأمين صحى للمستشفي المحجوز بها المريض
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-[700px]">
          <img
            src={
              id === "s1"
                ? service1Img
                : id === "s2"
                ? service2Img
                : service3Img
            }
            alt=""
            className="min-w-[700px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
