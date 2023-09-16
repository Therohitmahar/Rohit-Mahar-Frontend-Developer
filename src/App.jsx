import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Capsules from "./Pages/Capsules";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/" element={<Capsules />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
