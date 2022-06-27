import Footer from "../../components/Footer";
import Header from "../../components/Header";
import homeImage from "../../images/Health_photo.png";
import readImage from "../../images/ic_message_24px.png";
import eyeImage from "../../images/ic_visibility_2.png";
import StartPage from "./StartPage/StartPage";

const Home = ({ isStart }) => {
  if (isStart) {
    return <StartPage />;
  }

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

      <Footer />
    </>
  );
};

export default Home;
