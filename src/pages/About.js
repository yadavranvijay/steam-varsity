import React ,{useEffect} from "react";
import { Col, Row } from "antd";
import OurVesion from "../components/OurVesion";
import ServiceVideo from "../components/SevicesVideo";
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="page-content">
    <Helmet>
        <title>About Steam Varsity | Empowering Minds through STEAM Excellence</title>
        <meta name="description" content="Discover the heart and vision behind Steam Varsity, where innovation meets education. Our about us page shares the passion, expertise, and commitment that drive us to redefine STEAM education. Join us on a journey to inspire young minds and shape the future of learning." />
        <link rel="canonical" href="https://www.steamvarsity.com/about-us" />
    </Helmet>
      <div className="about-banner ">
        <div className="container">
          <Row align={"middle"}>
            <Col md={8}>
              <div className="about-img">
                <img src="images/about/banner.jpg" alt="" />
              </div>
            </Col>
            <Col md={4}></Col>
            <Col md={12}>
              <div className="about-banner-content">
                <h1> Welcome to Steam Varsity</h1>
                <p>
                  At Steam Varsity, we are passionate about shaping the future
                  of education through a dynamic approach that aligns with the
                  latest advancements in the field. As stalwarts of STEAM
                  education under the new educational policy, we embark on a
                  journey to nurture young minds, fostering a love for learning
                  and innovation.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <section className="py-50 bg2 ">
        <div className="container">
          <Row align="middle" className="content-main-wrapper">
            <Col md={12}>
              <div className="content-wrapper px-50">
                <h2> Our Mission</h2>
                <p>
                  At Steam Varsity, we are not just educators; we are mentors,
                  guiding students on a journey of discovery and growth. We are
                  committed to creating an inclusive and supportive community
                  where every learner is encouraged to explore their passions
                  and reach their full potential. <br />
                  Join us at Steam Varsity, where education transcends
                  boundaries, and students are prepared to be the leaders,
                  innovators, and problem-solvers of tomorrow.
                </p>
              </div>
            </Col>
            <Col md={12}>
              <div className="img-wrapper">
                <img src="images/about/Approach.jpg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="py-50">
        <div className="container snapshot-wrapper">
          <h2 className="heading">Why Steam Varsity ?</h2>
          <Row gutter={24}>
            <Col md={6}>
              <div className="box-wrapper">
                <div className="img-wrapper">
                  <img src="images/about/commitment.jpg" alt="" />
                </div>

                <div className="text">
                  <h2>Innovative Pedagogy</h2>
                  <p>
                    At Steam Varsity, we believe in fostering creativity and
                    critical thinking. Our educators leverage cutting-edge
                    pedagogical methods, ensuring that students not only
                    understand concepts but also learn how to apply them to
                    real-world scenarios.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="box-wrapper box-wrapper2">
                <div className="img-wrapper">
                  <img src="images/about/context.jpg" alt="" />
                </div>

                <div className="text">
                  <h2>Future-Ready Skills</h2>
                  <p>
                    The landscape of employment is evolving rapidly. Steam
                    Varsity equips students with the skills necessary to thrive
                    in the 21st century. From coding to design thinking, our
                    curriculum prepares learners for the challenges and
                    opportunities of tomorrow.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="box-wrapper box-wrapper3">
                <div className="img-wrapper">
                  <img src="images/about/beliefs.jpg" alt="" />
                </div>

                <div className="text">
                  <h2>Adaptability to New Education Policy</h2>
                  <p>
                    With the implementation of the New Education Policy, we are
                    at the forefront of aligning our curriculum to meet the
                    policy's vision. Our programs are designed to embrace the
                    policy's emphasis on flexibility, choice, and holistic
                    development.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="box-wrapper box-wrapper4">
                <div className="img-wrapper">
                  <img src="images/about/stories.jpg" alt="" />
                </div>

                <div className="text">
                  <h2>Global Perspective</h2>
                  <p>
                    Steam Varsity takes pride in offering a global perspective
                    to education. Our programs are designed to broaden students'
                    horizons, fostering an understanding of diverse cultures and
                    perspectives. We believe in preparing students not just for
                    local challenges but for a globally interconnected world.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>


      <section className="bg2">
      <ServiceVideo path="/images/about/vid.mp4"  />
      
      </section>

      <section className="py-50 our-vesion-wrapper">
        <OurVesion />
      </section>
    </div>
  );
};

export default About;
