import React, { useEffect } from "react";
import { Col, Row } from "antd";
import ServiceVideo from "../components/SevicesVideo";
import { useLocation } from "react-router-dom";
import OurVesion from "../components/OurVesion2";
import { Helmet } from "react-helmet";
import Forme from "../components/FormComponent";

const Facilitators = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="page-content">
      <Helmet>
        <title>STEAM Varsity Facilitators | Meet Our STEAM Visionaries </title>
        <meta
          name="description"
          content="Explore the profiles of our passionate STEAM facilitators at STEAM Varsity. With a wealth of knowledge and dedication, our educators inspire and guide students on a journey of discovery and innovation. Learn more about the brilliant minds shaping the future of STEAM education."
        />
        <link rel="canonical" href="https://www.steamvarsity.com/facilitators/" />
      </Helmet>

      <div className="banner1-wrapper">
        <div className="wrapper position-relative">
          <div className="img">
            <img src="/images/services/fa-banner.jpg" alt="" />
          </div>
          <div className="content-wrapper">
            <div className="content costum-container">
              <div className="row">
                <div className="col-md-6 text-white">
                  <span>Become a Facilitator</span>

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

      <section className="bg2">
        <div className="container py-50 ">
          <Row gutter={24} align={"middle"}>
            <Col xs={24} md={11}>
              <div className="wrapper">
                <h2 className=" section-heading">
                  Join Our Team at STEAM Varsity
                </h2>
                <h3 className="h4">
                  Ignite Futures. Inspire Minds. Teach with STEAM Varsity.
                </h3>

                <p className="">
                  At STEAM Varsity, we're more than just an education platform;
                  we're a dynamic community dedicated to empowering the next
                  generation of innovators and thinkers through STEAM (Science,
                  Technology, Engineering, Arts and Mathematics) education. We
                  believe in the transformative power of learning and the unique
                  role that teachers play in shaping the future.
                </p>
                <p>
                  <strong>We're seeking passionate educators</strong>
                </p>
                <p>
                  who are eager to make a difference. If you're a dedicated
                  professional with a love for teaching and a knack for
                  inspiring young minds, we'd love to hear from you.
                </p>
              </div>
            </Col>
            <Col xs={24} md={2}></Col>
            <Col xs={24} md={11}>
              <Forme />
            </Col>
          </Row>
        </div>
      </section>

      <div className="container py-5 ">
        <div className="row">
          <div className="col">
            <div className="wrapper">
              <h2>Why Teach at STEAM Varsity? </h2>

              <p>
                {" "}
                <strong>Innovative Curriculum:</strong> Engage with cutting-edge
                STEAM content that excites and challenges.
              </p>
              <p>
                <strong>Flexible Schedules:</strong> Teach at times that work
                for you with options for both part-time and full-time positions.
              </p>
              <p>
                <strong>Professional Growth:</strong> Develop your skills with
                ongoing training and opportunities to lead.
              </p>
              <p>
                <strong>Competitive Compensation:</strong> Receive attractive
                remuneration for your expertise and effort.
              </p>
              <p>
                <strong> Supportive Community:</strong> Join a network of
                educators who are as passionate about learning as they are about
                teaching.
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
                <h2>What We're Looking For:</h2>

                <p>
                  {" "}
                  <strong>Expertise: </strong> Strong knowledge in one or more
                  STEAM fields.
                </p>
                <p>
                  <strong> Experience: </strong> Prior teaching experience,
                  especially in a related field, is preferred.
                </p>
                <p>
                  <strong>Innovation: </strong> Ability to create engaging and
                  interactive learning experiences.
                </p>
                <p>
                  <strong>Communication:</strong> Excellent verbal and written
                  communication skills.
                </p>
                <p>
                  <strong>Commitment:</strong> A dedication to student success
                  and educational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>How to Apply:</h2>

                <p>
                  {" "}
                  <strong>Submit Your Application: </strong> Fill out our online
                  form with your details, experience, and the area of STEAM
                  you're interested in teaching.
                </p>
                <p>
                  <strong> Review Process: </strong> Our team will review your
                  application. If there's a match, we'll reach out to discuss
                  the next steps.
                </p>
                <p>
                  <strong>Interview: </strong> Engage with us in a conversation
                  about your passion for teaching and your vision for
                  contributing to the STEAM Varsity community.
                </p>
                <p>
                  <strong>Onboarding:</strong> Once selected, you'll go through
                  our comprehensive onboarding process, designed to prepare you
                  for a rewarding teaching experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      <section className="py-50 our-vesion-wrapper ">
        <OurVesion />
      </section>
    </div>
  );
};

export default Facilitators;
