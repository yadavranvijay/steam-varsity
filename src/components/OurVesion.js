

import { Card, Col, Collapse, Row } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const OurVesion = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
        <div id='faq' className="container our-vesion">
          <div className="heading">
          <span>FAQ</span>
            <h2 className=""><span>Frequently asked questions (FAQs) for STEAM VARSITY</span> </h2>
          
          </div>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} >
              <Card  bordered={false} >


                <Collapse bordered={false}  onChange={onChange} >
                  <Panel className='font16' header="What is STEAM VARSITY?" key="1" >
                    <p>STEAM VARSITY is an educational institution that specializes in Science, Technology, Engineering, Arts and Mathematics (STEAM) education. We offer innovative programs and hands-on experiences to empower students for the challenges of the future.</p>
                  </Panel>
                  <Panel className='font16' header="What makes STEAM VARSITY different from traditional education?" key="2">
                    <p>Unlike traditional education, STEAM VARSITY emphasizes an interdisciplinary and practical learning environment. We believe in the power of experiential learning, where theoretical concepts come alive through hands-on experiences.</p>
                  </Panel>
                  <Panel className='font16' header="Who can benefit from STEAM VARSITY programs?" key="3">
                    <p>Our programs cater to a diverse audience, including students seeking a dynamic educational experience, parents interested in fostering their child's creativity, educators looking to enhance their teaching methods, and partners eager to collaborate on innovative educational initiatives.</p>
                  </Panel>
                  <Panel className='font16' header="What age groups do you serve?" key="4">
                  <p>We provide educational services for various age groups, from primary school students to higher education levels. Our programs are designed to cater to the specific needs and interests of different age brackets.</p>
                </Panel>
                <Panel className='font16' header="How can I become a partner with STEAM VARSITY?" key="5">
                <p>If you're interested in collaborating with us, please visit the "Partnerships" section on our website. We welcome partnerships that align with our mission of advancing STEM education and fostering innovation.</p>
              </Panel>
              <Panel className='font16' header="What is the significance of 'Learning by Doing' at STEAM VARSITY?" key="6">
                <p> <strong>Learning by Doing</strong> is at the core of our philosophy. It means actively engaging with the material through hands-on experiences, turning theoretical knowledge into practical skills and fostering a deeper understanding of concepts.</p>
              </Panel>
              <Panel className='font16' header="How can I stay updated on STEAM VARSITY events and news?" key="7">
              <p>Stay connected with us through our website's "Events" section and subscribe to our newsletter for the latest updates, events, and news. You can also follow us on social media for real-time information and community engagement.</p>
            </Panel>
                 
                </Collapse>
                {/* </div> */}
              </Card>
            


            </Col>
          


          </Row>
        </div>
    

    </>

  );
};
export default OurVesion;