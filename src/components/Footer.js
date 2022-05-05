import {
  arrowUp,
  facebookIcon,
  linkedIcon,
  youtubeIcon,
} from "../helpers/icons/icons";

const Footer = () => {
  function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
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

      <footer className="bg-primary ">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center text-gray-600 fill-current gap-2">
            {facebookIcon}
            {youtubeIcon}
            {linkedIcon}
          </div>

          <div className="flex items-center gap-2">
            <p className="text-white">
              جميع الحقوق محفوظة © 2021 للهيئة العاملة للتأمين الصحي الشامل
            </p>

            <p
              className="bg-gray-900/20 text-white fill-current rounded-lg cursor-pointer"
              onClick={ScrollToTop}
            >
              {arrowUp}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
