import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./slick.css";
import "./slick-theme.css";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import About from "./pages/About";
import Facilitators from "./pages/Facilitators";
import Stories from "./pages/Stories";
import SocialWorks from "./pages/SocialWorks";
import DesignThinking from "./pages/course/DesignThinking";
import Robotics from "./pages/course/Robotics";
import Competitions from "./pages/course/Competitions";
import Programming from "./pages/course/Programming";
import Game from "./pages/course/Game";
import CyberSafety from "./pages/course/CyberSafety";
import CAD from "./pages/course/CAD";
import AI from "./pages/course/AI";
import Metaverse from "./pages/course/Metaverse";
import MobileComputing from "./pages/course/MobileComputing";
import Cloud from "./pages/course/Cloud";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/facilitators" element={<Facilitators />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/social-works" element={<SocialWorks />} />
        <Route path="/course/design-thinking" element={<DesignThinking />} />
        <Route path="/course/robotics" element={<Robotics />} />
        <Route path="/course/programming" element={<Programming />} />
        <Route path="/course/game" element={<Game />} />
        <Route path="/course/cyber-safety" element={<CyberSafety />} />
        <Route path="/course/cad" element={<CAD />} />
        <Route path="/course/ai" element={<AI />} />
        <Route path="/course/metaverse" element={<Metaverse />} />
        <Route path="/course/mobile-computing" element={<MobileComputing />} />
        <Route path="/course/cloud" element={<Cloud />} />
        <Route path="/course/competitions" element={<Competitions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
