import React ,{useEffect} from "react";
import { Col, Row, Form, Input, Select, Typography } from "antd";
import "./common.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <title>Connect with Steam Varsity | Contact Us for a STEAM-Powered Dialogue</title>
      <meta name="description" content="Get in touch with Steam Varsity and explore the possibilities of collaborative STEAM education. Our dedicated team is ready to answer your inquiries, discuss partnerships, and engage in conversations that fuel innovation. Reach out today and let's build a brighter future together." />
      <link rel="canonical" href="https://www.steamvarsity.com/contact-us" />
      
      
      </Helmet>

      <div className="home-banner page-banner position-relative">
        <div className="video overflow-hidden">
          <img src="images/contact-banner.jpg" alt="" />
        </div>
        <div className="banner-content">
          <div className="container h-100">
            <Row className="row d-flex h-100 " align={"middle"}>
              <Col lg={12}>
                <div className="wrapper text-white ">
                  <h1>Brief Introduction</h1>
                  <p>
                    Please provide us with a brief overview of who you are,
                    enabling us to identify the optimal solution for your needs.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="container py-50">
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <div className="contact-page-form-wrapper">
              <Form id="survey_submit_form" layout="vertical">
                <Form.Item name="firstName">
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item name="lastName">
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select placeholder="Client " allowClear>
                    <Option value="male">Market Research Company</Option>
                    <Option value="female">Affiliate Partner</Option>
                    <Option value="other">Publisher</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="company">
                  <Input placeholder="Company Name" />
                </Form.Item>
                <Form.Item name="Message">
                  <TextArea rows={4} placeholder="Write your message" />
                </Form.Item>

                <button className="btn form-btn" htmlType="submit">
                  Send
                </button>
              </Form>
            </div>
          </Col>
          <Col xs={24} md={2}></Col>
          <Col xs={24} md={10}>
            <div className="wrapper">
              <h2 className=" section-heading">Client Criteria</h2>

              <p className="">
                Prior to launching an affiliate program, it's essential to
                fulfill these basic prerequisites:
              </p>

              <ul className="contact-page-list ">
                <li>
                  <img src="images/check.svg" alt="" />{" "}
                  <span>I possess and manage an operational website.</span>
                </li>
                <li>
                  <img src="images/check.svg" alt="" />{" "}
                  <span>
                    I comprehend that I'll be required to compensate commissions
                    for sold products or generated leads.
                  </span>
                </li>
                <li>
                  <img src="images/check.svg" alt="" />{" "}
                  <span>
                    My website does not feature adult or gambling content.
                  </span>
                </li>
              </ul>

              <p>
                If you're interested in earning commissions, you can apply as a
                Publisher and initiate the process immediately.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
