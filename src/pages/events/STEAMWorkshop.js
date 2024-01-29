import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const STEAMWorkshop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 
  return (
    <div className="page-content">
      <Helmet>
        <title>
        STEAM Tinkering Workshop
        </title>
       
        <link rel="canonical" href="https://www.steamvarsity.com/STEAM-tinkering-workshop/" />
      </Helmet>

      <div className="banner1-wrapper">
      <div className="wrapper position-relative">
        <div className="img">
          <img src="/images/services/event.jpg" alt="" />
        </div>
        <div className="content-wrapper">
          <div className="content costum-container">
            <div className="row">
              <div className="col-md-6 text-white">
               
                <h1 className="fw-bold">STEAM Tinkering Workshop</h1>
                <h2 className="h4">Date : 16th January 2024</h2>
                <h2 className="h4">Venue : American Center, New Delhi</h2>
                <p>
                Join us for a dynamic one-day STEAM workshop! Dive into Science, Technology, Engineering, Arts, and Mathematics with hands-on activities designed to inspire and challenge. Fuel your creativity and enhance your problem-solving skills as you explore the world of high-tech tinkering and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>What to Expect</h2>

                <p>
                Students will learn to think like engineers. They will tinker through STEAM to design, build & code a robot in teams:
                </p>

                
                <p> <strong>  Kickstart with Ice Breakers : </strong> Get to know your fellow tinkerers and start the day with fun and engaging activities that stir up creativity and teamwork. </p>

 <p> <strong> Dive into Robotics : </strong> Discover the exciting world of robotics, where you will learn the basics and start thinking like an engineer. </p>

 <p> <strong> Form Teams : </strong> Collaborate and form teams that will work together through the challenges of designing and building a robot. </p>

 <p> <strong> Unleash Creativity with Design Thinking : </strong> Learn how to approach problems creatively and design innovative solutions. </p>

 <p> <strong> Explore CAD : </strong> Get an introduction to Computer-Aided Design and see how it transforms ideas into blueprints for the digital world. </p>

 <p> <strong> 3D Modelling : </strong> Take a step into the future with 3D modeling, where your ideas will take shape right before your eyes. </p>

 <p> <strong> Build Your Robot : </strong> Put theory into practice and assemble your robot using the skills you've learned throughout the day. </p>

 <p> <strong> Think Computationally : </strong> Understand computational thinking and how it applies to problem-solving in technology and engineering. </p>

 <p> <strong> Code Your Way to Success : </strong> Dive into programming and coding, bringing your robot to life with commands and sequences. </p>

 <p> <strong> Understand Motors and Sensors : </strong> Learn how motors power movement and how sensors can make your robot interact with its surroundings. </p>

 <p> <strong> Test and Debug : </strong> Test your creation and troubleshoot any issues with the help of our expert instructors.</p>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 ">
        <div className="row">
          <div className="col">
            <div className="wrapper">
              <h2>Who Should Attend </h2>

              <p>
               
              This workshop is perfect for students who are passionate about technology, engineering, and innovation. Whether you're a beginner or already on your STEAM journey, you'll find something to challenge and excite you.
              </p>
             
            </div>
          </div>
        </div>
      </div>

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>Why Attend</h2>

                <ul>
                <li><p>Foster critical thinking and problem-solving skills.</p></li>
                <li><p>Gain hands-on experience in robotics and programming.</p></li>
                <li><p>Collaborate with peers and make new friends.</p></li>
                <li><p>Be inspired by expert instructors and a stimulating environment.</p></li>
                </ul>

                <p>
                 
                  <strong>Comprehensive Curriculum: </strong> Covering
                  everything from basic concepts to advanced techniques.
                </p>
                <p>
                  <strong>Hands-on Projects: </strong> Apply your skills to
                  build and deploy AI and ML models.
                </p>
                <p>
                  <strong>Expert Instructors: </strong> Learn from professionals
                  with real-world experience in AI and ML.
                </p>
                <p>
                  <strong>Interactive Learning:</strong> Engage with interactive
                  tutorials, quizzes, and peer discussions.
                </p>
                <p>
                  <strong>Flexible Access:</strong> Study at your own pace with
                  access to course materials anytime, anywhere.
                </p>

              
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default STEAMWorkshop;
