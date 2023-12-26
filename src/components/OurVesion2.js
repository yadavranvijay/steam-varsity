

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
                  <Panel className='font16' header="What qualifications are required to teach at Steam Varsity?" key="1" >
                    <p>We seek passionate educators with a strong knowledge base in one or more STEAM fields. A degree in your subject area, teaching certification, and prior teaching experience are highly preferred.</p>
                  </Panel>
                  <Panel className='font16' header="Are there opportunities for non-traditional educators or industry professionals?" key="2">
                    <p>Yes, we value diverse experiences. Industry professionals with a passion for teaching and an in-depth understanding of STEAM subjects are encouraged to apply.</p>
                  </Panel>
                  <Panel className='font16' header="How can I apply to be a teacher at Steam Varsity?" key="3">
                    <p>You can apply through our online application form. Please provide your resume, a cover letter, and any relevant certifications or portfolios.</p>
                  </Panel>
                  <Panel className='font16' header="What does the hiring process involve?" key="4">
                  <p>The process typically includes an application review, an initial interview, a teaching demonstration, and a final interview. We might also conduct background checks and require professional references.</p>
                </Panel>
                <Panel className='font16' header="Can I teach remotely, or do I need to be located near a physical classroom?" key="5">
                <p>We offer both remote and in-person teaching opportunities. Please specify your preference and availability in your application.</p>
              </Panel>
              <Panel className='font16' header="How are teachers compensated at Steam Varsity?" key="6">
                <p> Compensation is competitive and based on experience, qualifications, and the nature of the course taught. Details will be discussed during the hiring process.</p>
              </Panel>
              <Panel className='font16' header="What type of support and resources does Steam Varsity provide to its teachers?" key="7">
              <p>We provide comprehensive onboarding, access to teaching resources, ongoing professional development opportunities, and a supportive community of educators.</p>
            </Panel>
            <Panel className='font16' header="Can I teach part-time or is only full-time employment available?" key="8">
            <p>Both part-time and full-time opportunities are available. Please indicate your availability in your application.</p>
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