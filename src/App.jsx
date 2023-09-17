import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Capsules from "./Pages/Capsules";
import Cores from "./Pages/Cores";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Ships from "./Pages/Ships";
import HumanFlights from "./Pages/HumanFlights";
import StarShield from "./Pages/StarShield";
function App() {
  useEffect(() => {
    Aos.init();
  });
  //TODO: remove mission from select in capsules
  //TODO: modal for single item
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/humanship" element={<HumanFlights />} />
        <Route path="/starshield" element={<StarShield />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
