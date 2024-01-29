import React from "react";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className=" bg-dark border-bottom ">
        <div className="punchline-wrapper  py-50">
          <Row gutter={24}>
            <Col md={12} xs={24}>
              <div className="punchline-left">
                <div className="text">
                  <div className="wrapper">
                    <h2>Contact Info</h2>
                    <ul className="ps-0">
                      <li className="d-flex">
                        <span className="icon-box me-2">
                          <FaLocationDot />
                        </span>
                        <span>
                          <p>
                            <strong className="d-block">
                              {" "}
                              STEAM VARSITY PRIVATE LIMITED
                            </strong>
                            5th Floor, 501, JMD Megapolis IT Park, Sohna Road,
                            Sector 48, Gurugram, Gurugram, Haryana, 122018
                          </p>
                        </span>
                      </li>
                      <li>
                        <span className="icon-box me-2">
                          <FaPhone />
                        </span>
                        <NavLink to="tel:+919650206678">
                          {" "}
                          +91 9650206678
                        </NavLink>
                      </li>
                      <li>
                        <span className="icon-box me-2">
                          <FaPhone />
                        </span>
                        <NavLink to="tel:+919818056820">
                          {" "}
                          +91 98180 56820
                        </NavLink>
                      </li>
                      <li>
                        <span className="icon-box me-2">
                          <FaRegEnvelope />
                        </span>
                        <NavLink
                          to="mailto:info@steamvarsity.com"
                          target="_blank"
                          rel="noopener"
                        >
                          info@steamvarsity.com
                        </NavLink>
                      </li>
                    </ul>
                    <div className="socal">
                      <NavLink
                        to="https://linkedin.com/company/STEAMvarsity"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaLinkedin />
                      </NavLink>
                      <NavLink
                        to="https://facebook.com/STEAMvarsity"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaFacebookSquare />
                      </NavLink>
                      <NavLink
                        to="https://www.instagram.com/STEAMvarsity/"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaSquareInstagram />
                      </NavLink>
                      <NavLink
                        to="https://whatsapp.com/channel/0029VaDLxRU3gvWfcBG7qT3W"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaSquareWhatsapp />
                      </NavLink>

                      <NavLink
                        to="https://x.com/STEAMvarsity"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaSquareXTwitter />
                      </NavLink>
                      <NavLink
                        to="https://youtube.com/@STEAMVarsity"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaYoutube />
                      </NavLink>
                    </div>
                  </div>
                  {
                    //  <p className="text-muted">Lorem ipsum dolor sit amet.</p>
                    //  <NavLink className="btn" to="mailto:rjyadavweb@gmail.com"> <span>Connect to us </span></NavLink>
                  }
                </div>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="punchline-right mt-4 mt-md-0 ps-md-5">
                <div>
                  <div className="punchline-links">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <NavLink to="/events/">Events</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about-us/">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/students/">Students</NavLink>
                      </li>
                      <li>
                        <NavLink to="/hire-facilitators/">
                          Hire a Facilitator
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/facilitators/">
                          Become a Facilitator
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/csr/">
                          Corporate Social Responsibility
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <div className="copyright">
        <Row align={"middle"}>
          <Col md={8} sm={12} xs={24}>
            <NavLink to="/" className="footer-logo">
              <img src="/logo/STEAM_VARSITY_Logo_1.png" alt="" />
            </NavLink>
          </Col>

          <Col md={16} sm={12} xs={24}>
            <p className="mb-0">
              Facilitating 'Learning by Doing' through <strong>S</strong>cience,{" "}
              <strong>T</strong>echnology, <strong>E</strong>ngineering,{" "}
              <strong>A</strong>rts and <strong>M</strong>athematics
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
