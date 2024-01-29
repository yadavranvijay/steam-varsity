

import { Card, Col, Collapse, Row } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const HireFaq = () => {
  const onChange = (key) => {
   
  };
  return (
    <>
        <div id='faq' className="container our-vesion">
          <div className="heading">
          <span>FAQ</span>
            <h2 className=""><span>Frequently asked questions (FAQs) for Hire a Facilitator</span> </h2>
          
          </div>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} >
              <Card  bordered={false} >


                <Collapse bordered={false}  onChange={onChange} >
                  <Panel className='font16' header="What qualifications do STEAM Varsity facilitators have?" key="1" >
                    <p>Our facilitators are experienced professionals with strong backgrounds in their respective STEAM fields. They have educational credentials and a proven track record of inspiring and educating young minds.</p>
                  </Panel>
                  <Panel className='font16' header="How do I know which facilitator is right for our needs?" key="2">
                    <p>During the initial consultation, we'll discuss your specific goals and preferences. Based on this, we'll recommend facilitators who best match your requirements in terms of expertise, teaching style, and experience.</p>
                  </Panel>
                  <Panel className='font16' header="Can the facilitator customize the curriculum for my group?" key="3">
                    <p>Absolutely! Our facilitators excel in tailoring the curriculum to fit the unique needs and interests of each group, ensuring an engaging and effective learning experience.</p>
                  </Panel>
                  <Panel className='font16' header="What age groups do you cater to?" key="4">
                  <p>Our programs and facilitators are versatile and can cater to a wide range of age groups, from young children to high school students. We adapt our content and delivery style to be age-appropriate and engaging.</p>
                </Panel>
                <Panel className='font16' header="How do I book a facilitator for an event or program?" key="5">
                <p>You can start by filling out the contact form on our website or reaching out to us via phone or email. We'll then set up a consultation to discuss your needs and begin the booking process.</p>
              </Panel>
              <Panel className='font16' header="What is the cost of hiring a facilitator?" key="6">
                <p> Pricing varies based on several factors, including the duration of the program, the facilitator's expertise, and any specific requirements you may have. We provide a detailed quote after understanding your needs in the initial consultation.</p>
              </Panel>
              <Panel className='font16' header="Do facilitators provide their own materials and equipment?" key="7">
              <p>Facilitators come prepared with necessary educational materials and can bring specialized equipment if required. However, we will discuss any specific material needs during the planning stage.</p>
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
export default HireFaq;