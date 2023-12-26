import React, { useEffect } from "react";
import LatestNews from "../components/LatestNews";
import Cources from "../components/Cources";
import { useLocation } from "react-router-dom";
import OurVesion from "../components/OurVesion1";
import { Helmet } from "react-helmet";

const Students = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="page-content">

    <Helmet>
    <title> Students | Steam Varsity</title>
    <meta name="description" content="Embark on a transformative educational experience with Steam Varsity's comprehensive STEAM courses. From foundational knowledge to advanced skills, our courses are designed to ignite curiosity and foster innovation. Explore a world of possibilities and unleash your potential with our dynamic learning programs." />
    <link rel="canonical" href="https://www.steamvarsity.com/students" />
    </Helmet>
      <div className="banner1-wrapper">
        <div className="wrapper position-relative">
          <div className="img">
            <img src="/images/services/f-banner.jpg" alt="" />
          </div>
          <div className="content-wrapper">
            <div className="content costum-container">
              <div className="row">
                <div className="col-md-6 text-white">
                  <span>Students</span>

                  <h1 className="fw-bold">
                    Unlock Your Potential at Steam Varsity
                  </h1>

                  <p>
                    Hey there, future innovators! Welcome to the Students hub at
                    Steam Varsity, where curiosity meets creation and learning
                    is an adventure. This is your space to discover, explore,
                    and dive deep into the exciting world of STEAM education.
                    Let's get started !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container py-5">
          <h2 className="fw-bold mb-5">Upcoming Events</h2>

          <LatestNews path="/images/services/latest.jpg" />
        </div>
      </section>

      <Cources />


      <section className="py-50 our-vesion-wrapper">
      <OurVesion />
    </section>


    </div>
  );
};

export default Students;
