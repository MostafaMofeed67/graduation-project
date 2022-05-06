import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Branches from "./pages/Branches/Branches";
import Home from "./pages/Home/Home";
import Management from "./pages/Management/Management";
import Management2 from "./pages/Management/Management2";
import Management3 from "./pages/Management/Management3";
import Partners from "./pages/Partners/Partners";
import Profile from "./pages/Profile/Profile";
import Reports from "./pages/Reports/Reports";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/Services/ServicesDetails/ServicesDetails";
import Signin from "./pages/Signup/Signin";

function App() {
  const [isStart, setIsStart] = useState(true);

  const isStartChangeHandler = () => setIsStart(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isStart={isStart} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicesDetails />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management2" element={<Management2 />} />
        <Route path="/management3" element={<Management3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/signin"
          element={<Signin onIsStarttChange={isStartChangeHandler} />}
        />
      </Routes>
    </>
  );
}

export default App;
