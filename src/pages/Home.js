import React, { useEffect } from "react";
import { Col, Row, Form, Input, Select, Divider } from "antd";

import "./home.css";
import Solutions from "../components/Solutions";
import Segment from "../components/Segment";
import HomeBanner from "../components/HomeBanner";
import OurVesion from "../components/OurVesion";
import Pedagogies from "../components/Pedagogies";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const { Option } = Select;
const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page-content" >
<Helmet>
<title>STEAM Varsity</title>
<meta name="description" content="Welcome to Steam Varsity, where education meets innovation. Explore a diverse spectrum of STEAM courses, empowering students to unleash their creativity and shape the future. Join us on a transformative journey of learning, discovery, and limitless possibilities." />
<link rel="canonical" href="https://www.steamvarsity.com" />

</Helmet>
      <HomeBanner />
      <div className=" pb-5 bg2">
        <div className="container">
          <div className="wrapper py-5">
            <h2 className="pb-3">Pedagogies</h2>
            <Pedagogies />
          </div>
        </div>
      </div>
      <div className="service-wrapper bg-white  pt-5 ">
        <div className="heading-wrapper">
          <h2 className=" heading">
            A Suite of Hands-On STEAM Tinkering Programs for Every Age
          </h2>
        </div>
        <div className="about-service-slide-wrapper">
          <Solutions />
        </div>
      </div>

      <section className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="wrapper text-center purpose-wrapper">
                <h2>Our Purpose:</h2>

                <p>
                  Learning by doing with fun & excitement and fueled by
                  curiosity & innovation in compliance with New Education Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Segment />

      <section className="bg2">
        <div className="container py-50 ">
          <Row gutter={24} align={"middle"}>
            <Col xs={24} md={11}>
              <div className="wrapper">
                <h2 className=" section-heading">
                  STEAM VARSITY: Igniting Minds, Fostering Innovation
                </h2>

                <p className="">
                  Welcome to STEAM VARSITY, where Science, Technology,
                  Engineering, Arts, and Mathematics converge in an integrated
                  approach to foster critical thinking and problem-solving
                  skills. We go beyond disciplines, providing hands-on
                  experiences that nurture innovation and collaboration. Join us
                  in shaping the future as we empower minds to thrive in a
                  dynamically evolving world. Explore the transformative power
                  of STEAM education at VARSITY—where learning knows no
                  boundaries. Ignite your potential and embrace a journey of
                  limitless possibilities.
                </p>
                <p>
                  <strong>Join Us in Shaping the Future</strong>
                </p>
                <p>
                  As you step into the world of STEAM VARSITY, you step into a
                  community dedicated to pushing the boundaries of education.
                  Explore the intersections of science, technology, engineering,
                  arts, and mathematics, and discover the transformative power
                  of integrated learning.
                </p>
              </div>
            </Col>
            <Col xs={24} md={2}></Col>
            <Col xs={24} md={11}>
              <div className="form-wrapper">
                <Form id="survey_submit_form" layout="vertical">
                  <Divider>Join STEAM VARSITY </Divider>

                  <Form.Item name="firstName">
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item name="lastName">
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item name="email">
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="company">
                    <Select placeholder="Community Type">
                      <Option value="male">Student</Option>
                      <Option value="female"> Parent</Option>
                      <Option value="other">Educator</Option>
                      <Option value="other">Partner</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="company">
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                  <Form.Item name="company">
                    <Select placeholder="Choose your interesting topic">
                      <Option value="male">Robotics ,Drone & IoT</Option>
                      <Option value="female"> Programming & coding</Option>
                      <Option value="other">Game & Animation </Option>
                      <Option value="other">Cyber Safety & security</Option>
                    </Select>
                  </Form.Item>

                  <button className="btn form-btn" htmlType="submit">
                    Submit
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="py-50 our-vesion-wrapper">
        <OurVesion />
      </section>
    </div>
  );
};

export default Home;
