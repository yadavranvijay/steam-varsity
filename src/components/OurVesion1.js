

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
            <h2 className=""><span>Frequently asked questions (FAQs) for Our Courses</span> </h2>
          
          </div>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} >
              <Card  bordered={false} >


                <Collapse bordered={false}  onChange={onChange} >
                  <Panel className='font16' header="What types of courses are offered at STEAM Varsity?" key="1" >
                    <p>Explore our diverse range of courses in science, technology, engineering, Arts and mathematics, each designed to foster innovation and critical thinking.</p>
                  </Panel>
                  <Panel className='font16' header="How long does each course take to complete?" key="2">
                    <p>Course durations vary, ranging from short-term workshops to comprehensive modules. Check individual course details for specific timelines.</p>
                  </Panel>
                  <Panel className='font16' header="Are there any prerequisites for enrolling in a course?" key="3">
                    <p>Some courses may require foundational knowledge or skills. Please review the prerequisites section for each course before enrolling.</p>
                  </Panel>
                  <Panel className='font16' header="Can I access courses online, or do I need to attend in person?" key="4">
                  <p>STEAM Varsity offers both online and in-person learning experiences. Refer to the course format to choose what suits you best.</p>
                </Panel>
                <Panel className='font16' header="How do I register for a course?" key="5">
                <p>Simply visit the registration section on our 'Courses' page, select your desired course, and follow the steps to enroll.</p>
              </Panel>
              <Panel className='font16' header="What age groups are the courses suitable for?" key="6">
                <p> Our courses cater to a wide age range, from young learners to adults, with specific recommendations listed on each course page.</p>
              </Panel>
              <Panel className='font16' header="Do you provide certificates upon course completion?" key="7">
              <p>Yes, students who successfully complete their courses will receive a STEAM Varsity certificate, symbolizing their achievement and expertise.</p>
            </Panel>
            <Panel className='font16' header="Who can I contact for more information or support?" key="8">
            <p>For further inquiries or assistance, please contact our support team through the contact information provided on our website. We're here to help!</p>
          </Panel>
                 
                </Collapse>
               
              </Card>
            


            </Col>
          


          </Row>
        </div>
    

    </>

  );
};
export default OurVesion;