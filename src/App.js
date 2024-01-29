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
import CSR from "./pages/CSR";
import STEAMWorkshop from "./pages/events/STEAMWorkshop";
import BrainComputer from "./pages/course/BrainComputer";
import FinancialLiteracy from "./pages/course/FinancialLiteracy";
import Blockchain from "./pages/course/Blockchain";
import BeyondBoundaries from "./pages/blog/BeyondBoundaries";
import LearningDoing from "./pages/blog/LearningDoing";
import STEAMEducation from "./pages/blog/STEAMEducation";
import STEAMPurpose from "./pages/blog/STEAMPurpose";
import HireFacilitators from "./pages/HireFacilitators";
import Events from "./pages/Events";
import STL from "./pages/STL";
import ProblemBasedLearning from "./pages/blog/ProblemBasedLearning";
import Blog from "./pages/blog/blog";
import ProjectBasedLearning from "./pages/blog/ProjectBasedLearning";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/" element={<Students />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/contact-us/" element={<Contact />} />
        <Route path="/facilitators/" element={<Facilitators />} />
        <Route path="/hire-facilitators/" element={<HireFacilitators />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/steam-tinkering-lab/" element={<STL />} />
        <Route path="/csr/" element={<CSR />} />
        <Route path="/course/design-thinking/" element={<DesignThinking />} />
        <Route path="/course/robotics/" element={<Robotics />} />
        <Route path="/course/programming/" element={<Programming />} />
        <Route path="/course/game/" element={<Game />} />
        <Route path="/course/cyber-safety/" element={<CyberSafety />} />
        <Route path="/course/cad/" element={<CAD />} />
        <Route path="/course/ai/" element={<AI />} />
        <Route path="/course/metaverse/" element={<Metaverse />} />
        <Route path="/course/mobile-computing/" element={<MobileComputing />} />
        <Route path="/course/cloud/" element={<Cloud />} />
        <Route path="/course/competitions/" element={<Competitions />} />
        <Route path="/course/brain-computer-interface/" element={<BrainComputer />} />
        <Route path="/course/financial-literacy/" element={<FinancialLiteracy />} />
        <Route path="/course/blockchain/" element={<Blockchain />} />
        <Route path="/STEAM-tinkering-workshop/" element={<STEAMWorkshop />} />
        <Route path="/blog/learning-beyond-boundaries/" element={<BeyondBoundaries />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/learning-by-doing/" element={<LearningDoing />} />
        <Route path="/blog/steam-education/" element={<STEAMEducation />} />
        <Route path="/blog/steam-varsity-purpose/" element={<STEAMPurpose />} />
        <Route path="/blog/problem-based-learning/" element={<ProblemBasedLearning />} />
        <Route path="/blog/project-based-learning/" element={<ProjectBasedLearning />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
