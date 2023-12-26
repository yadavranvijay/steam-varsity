import React from 'react'

import banner from "../assets/leadership-banner.jpg"
import { Col, Row } from 'antd';
import HomeAboutSlider from './HomeAboutSlider';

const HomeAbout = () => {
  return (
    <div>
    <div class="gallery-banner" style={{backgroundImage:`url(${banner})`}}>
    <div class="img-shadow">
      <div class="container">
        <Row>
          <Col  lg={12} md={24} >
            <h4 class=" text-white"> About Us</h4>
            <div class="position-relative b-left">
              <h2 class=" text-white heading">Make a significant impact by recruiting, honoring, and nurturing exceptional individuals from diverse backgrounds.</h2>
            </div>
          </Col>
        </Row>

      </div>

    </div>
  </div>
  <div class="container gallery-wrapper">
    <div class="gallery-banner-slider">
     <HomeAboutSlider />
    </div>
  </div>
    </div>
  )
}

export default HomeAbout