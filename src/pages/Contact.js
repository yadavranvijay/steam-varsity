import React ,{useEffect} from "react";
import { Col, Row, Form, Input, Select, Typography } from "antd";
import "./common.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Forme from "../components/FormComponent";

const { Option } = Select;

const { TextArea } = Input;

const { Title } = Typography;

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="page-content">
      <Helmet>
      <title>Connect with STEAM Varsity | Contact Us for a STEAM-Powered Dialogue</title>
      <meta name="description" content="Get in touch with STEAM Varsity and explore the possibilities of collaborative STEAM education. Our dedicated team is ready to answer your inquiries, discuss partnerships, and engage in conversations that fuel innovation. Reach out today and let's build a brighter future together." />
      <link rel="canonical" href="https://www.steamvarsity.com/contact-us/" />
      
      
      </Helmet>

      <div className="home-banner page-banner position-relative">
        <div className="video overflow-hidden">
          <img src="/images/contact-banner.jpg" alt="" />
        </div>
        <div className="banner-content">
          <div className="container h-100">
            <Row className="row d-flex h-100 " align={"middle"}>
              <Col lg={12}>
                <div className="wrapper text-white ">
                  <h1>Connect with Us</h1>
                  <p>
                  Stay connected and be the first to know about upcoming events, workshops, and exciting new programs. Follow us on our social media channels and join our community of STEAM Varsity.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="bg2">
      
      
      <div className="container py-50 ">
        <Row gutter={24}>
          <Col xs={24} md={12}>
           <Forme display="d-none"/>
          </Col>
          <Col xs={24} md={2}></Col>
          <Col xs={24} md={10}>
            <div className="wrapper">
              <h2 className=" section-heading">Get in Touch</h2>

              <p className="">
              For more information about our programs, resources, and events, or just to say hello, please submit  the form .
              </p>

              <ul className="contact-page-list ">
                <li>
               
                  <span><strong>Support : </strong> Need assistance or have a specific query? Our dedicated team is here to help you.</span>
                </li>
                <li>
                 
                  <span> <strong>Partnerships : </strong>
                  Interested in collaborating or contributing to our mission? We'd love to hear from you.
                  </span>
                </li>
                <li>
                  
                  <span> <strong>Visit Us : </strong>
                  We believe in the power of community and welcome you to visit our campus. Engage with our educators, meet our students, and experience the vibrant energy of Steam Varsity firsthand.
                  </span>
                </li>
              </ul>

             
              <p>
              Your insights and experiences matter to us. If you have feedback, suggestions, or stories to share, please reach out. We're committed to continuous improvement and value your input.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      </div>
    </div>
  );
};

export default Contact;
