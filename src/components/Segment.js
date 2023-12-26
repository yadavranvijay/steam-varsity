import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";

const Segment = () => {
const [tab1 , setTab1] =useState ()
const [tab2 , setTab2] =useState ()
const [tab3 , setTab3] =useState ()
const [tab4 , setTab4] =useState ()

const tabbtn1 =()=>{
setTab1(true)
setTab2(false)
setTab3(false)
setTab4(false)

}
const tabbtn2 =()=>{
  setTab1(false)
  setTab2(true)
  setTab3(false)
  setTab4(false)
  
  }
  const tabbtn3 =()=>{
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
    
    }
    const tabbtn4 =()=>{
      setTab1(false)
      setTab2(false)
      setTab3(false)
      setTab4(true)
      
      }


useEffect(()=>{
  tabbtn1()

},[])



  return (
    <div className="business-segment  py-50">
      <div className="container">
        <div className="segment-heading pb-5 mb-4 flex-centet-between">
          <h2 className="mb-0 heading"> STEAM VARSITY Community</h2>
         <div className="tab-wrapper">
         <ul className="nav nav-tabs flex-centet-start">
            <li className="nav-item">
            <span onClick={()=>tabbtn1()} className={tab1 ? "nav-link active":"nav-link "}>
             Students
            </span>
             
            </li>
            <li className="nav-item">
            <span onClick={()=>tabbtn2()} className={tab2 ? "nav-link active":"nav-link "}>
            Parents
            </span>
            </li>
            <li className="nav-item">
            <span onClick={()=>tabbtn3()} className={tab3 ? "nav-link active":"nav-link "}>
            Educators
            </span>
            </li>
            <li className="nav-item">
            <span onClick={()=>tabbtn4()} className={tab4 ? "nav-link active":"nav-link "}>
            Partners
            </span>
            </li>
          </ul>
         </div>
          
        </div>

        <div className="tab-content">
          <div className={tab1 ? "tab-pane container active":"tab-pane container "} >
            <div className="items">
            <Row gutter={24} align="middle">
            <Col md={10} xs={24}>
            <div className="segment-text">
                      <h2 className="heading">Students</h2>
                      <p><strong>Empowering Future Innovators</strong></p>
                      <p className="px-2">
                       
                       At STEAM VARSITY, students are at the heart of our mission. We provide a dynamic learning environment where theoretical knowledge transforms into hands-on experiences. Join us on a journey of discovery and empowerment, where your curiosity becomes the driving force for innovation.
                      </p>
                    </div>
            </Col>
            <Col md={2} xs={24}>
            
            </Col>
            <Col md={12} xs={24}>
            <div className="img">
            <img src="images/home/commitment.jpg" alt="business-seg" />
          </div>
            </Col>
            
            
            </Row>
           
            </div>
          </div>

        <div className={tab2 ? "tab-pane container active":"tab-pane container "} >
        <div className="items">
        <div className="items">
        <Row gutter={24} align="middle">
        <Col md={10} xs={24}>
        <div className="segment-text">
        <h2 className="heading">Parents</h2>
        <p><strong>Investing in Your Child's Future</strong></p>
        <p className="px-2">
         
         As a parent, you play a pivotal role in shaping your child's future. STEAM VARSITY is committed to providing top-notch education that goes beyond textbooks. Partner with us to cultivate your child's critical thinking, problem-solving skills, and a lifelong love for learning.
        </p>
      </div>
        </Col>
        <Col md={2} xs={24}>
        
        </Col>
        <Col md={12} xs={24}>
        <div className="img">
        <img src="images/home/rode-map.jpg" alt="business-seg" />
        </div>
        </Col>
        
        
        </Row>
        
        </div>
        </div>
        </div>
        <div className={tab3 ? "tab-pane container active":"tab-pane container "} >
        <div className="items">
        <Row gutter={24} align="middle">
        <Col md={10} xs={24}>
        <div className="segment-text">
        <h2 className="heading">Educators</h2>
        <p><strong>Elevate Your Teaching Experience</strong></p>
        <p className="px-2">
         
         To educators, we offer a platform that transcends traditional teaching. STEAM VARSITY provides resources, training, and a collaborative community to enhance your teaching methods. Join us in creating an impactful and engaging educational experience that prepares students for the challenges of tomorrow.
        </p>
      </div>
        </Col>
        <Col md={2} xs={24}>
        
        </Col>
        <Col md={12} xs={24}>
        <div className="img">
        <img src="images/home/consume.jpg" alt="business-seg" />
    </div>
        </Col>
        
        
        </Row>
        
        </div>
        </div>
        <div className={tab4 ? "tab-pane container active":"tab-pane container "} >
        <div className="items">
        <Row gutter={24} align="middle">
        <Col md={10} xs={24}>
        <div className="segment-text">
        <h2 className="heading">Partners</h2>
        <p><strong>Collaborate for Impact</strong></p>
        <p className="px-2">
         
         Collaborate with STEAM VARSITY as a partner and be part of a movement to redefine education. Together, we can create innovative programs, initiatives, and resources that make a lasting impact on the educational landscape. Join us in shaping the future of STEAM education worldwide.
        </p>
      </div>
        </Col>
        <Col md={2} xs={24}>
        
        </Col>
        <Col md={12} xs={24}>
        <div className="img">
        <img src="images/home/stories.jpg" alt="business-seg" />
    </div>
        </Col>
        
        
        </Row>
        
        </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Segment;
