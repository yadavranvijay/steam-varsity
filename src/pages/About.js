import React, { useEffect } from "react";
import { Col, Row } from "antd";
import OurVesion from "../components/OurVesion";
import ServiceVideo from "../components/SevicesVideo";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import CourseBanner from "../components/CourseBanner";

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bannerData = {
    image: "/images/about/about-banner.jpg",
    heading: "Welcome to STEAM Varsity",
    para: "Welcome to the Blockchain Essentials course, a pivotal part of our cutting-edge curriculum at STEAM Varsity. In an era where technology is continuously evolving, understanding the transformative power of blockchain is vital for anyone keen on shaping the future.",
  };
  return (
    <div className="page-content">
      <Helmet>
        <title>
          About STEAM Varsity | Empowering Minds through STEAM Excellence
        </title>
        <meta
          name="description"
          content="At STEAM Varsity, we are passionate about shaping the future
        of education through a dynamic approach that aligns with the
        latest advancements in the field. As stalwarts of STEAM
        education under the new educational policy, we embark on a
        journey to nurture young minds, fostering a love for learning
        and innovation."
        />
        <link rel="canonical" href="https://www.steamvarsity.com/about-us/" />
      </Helmet>
      <CourseBanner {...bannerData} />

      <div className="py-5 bg2">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="wrapper">
                <h2 className="Bold mb-4 banner-color">Our Mission</h2>
                <p>
                  At STEAM Varsity, we are not just educators; we are mentors,
                  guiding students on a journey of discovery and growth. We are
                  committed to creating an inclusive and supportive community
                  where every learner is encouraged to explore their passions
                  and reach their full potential.
                </p>

                <p>
                  This allows for more efficient data collection and analysis,
                  as the responses can be easily stored and analyzed using
                  specialized software.
                </p>
                <p>
                  Join us at STEAM Varsity, where education transcends
                  boundaries, and students are prepared to be the leaders,
                  innovators, and problem-solvers of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-50 ">
        <div className="container snapshot-wrapper cources-section">
          <h2 className="heading">Why STEAM Varsity ?</h2>

          <div className="row  p-relative mt-4">
            <div className="col-md-4 ">
              <div className="content-wrapper h-100">
                <div className="content">
                  <div className="img">
                    <img src="/images/about/pedagogies.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="h5 fw-bold">Innovative Pedagogy</h3>
                    <p>
                      At STEAM Varsity, we believe in fostering creativity and
                      critical thinking. Our educators leverage cutting-edge
                      pedagogical methods, ensuring that students not only
                      understand concepts but also learn how to apply them to
                      real-world scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="content-wrapper h-100">
                <div className="content">
                  <div className="img">
                    <img src="/images/about/future-skill.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="h5 fw-bold">Future-Ready Skills</h3>
                    <p>
                      The landscape of employment is evolving rapidly. STEAM
                      Varsity equips students with the skills necessary to
                      thrive in the 21st century. From coding to design
                      thinking, our curriculum prepares learners for the
                      challenges and opportunities of tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="content-wrapper h-100">
                <div className="content">
                  <div className="img">
                    <img src="/images/about/nep.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="h5 fw-bold">
                      Adaptability to New Education Policy
                    </h3>
                    <p>
                      STEAM Varsity takes pride in offering a global perspective
                      to education. Our programs are designed to broaden
                      students' horizons, fostering an understanding of diverse
                      cultures and perspectives. We believe in preparing
                      students not just for local challenges but for a globally
                      interconnected world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      <section className="bg2">
        <ServiceVideo path="/images/about/vid.mp4" />
      </section>

      <section className="py-50 our-vesion-wrapper">
        <OurVesion />
      </section>
    </div>
  );
};

export default About;
