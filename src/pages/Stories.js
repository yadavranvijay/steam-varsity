import React, { useEffect } from "react";
import Cources from "../components/Cources";
import Cources1 from "../components/Cources1";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";


const Stories = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="page-content">
    <Helmet>
    <title> Stories from the STEAM Frontier </title>
    <meta name="description" content="Dive into the captivating stories that unfold within the realm of STEAM Varsity. From breakthrough projects to personal journeys of discovery, our collection of narratives showcases the profound impact of STEAM education. Join us in celebrating the stories that shape our innovative community." />
    <link rel="canonical" href="https://www.steamvarsity.com/stories/" />
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
                  <span>Facilitators</span>

                  <h1 className="fw-bold">Meet Your Inspiring Guides</h1>

                  <p>
                    Welcome to the STEAM Varsity family! At the heart of our
                    vibrant learning community are the incredible facilitators
                    who make the world of STEAM education come alive. Get to
                    know the inspiring individuals who will be your mentors,
                    guides, and partners in your journey of discovery and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section></section>

      <Cources />

      <Cources1 />
    </div>
  );
};

export default Stories;
