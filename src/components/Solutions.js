

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
export default class Solutions extends Component {
  render() {
    const settings = {
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 3.3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.2,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
        <div class="service-item">
  <div class="service">
    <div class="img">
      <img src="images/home/thinking.jpg" alt="" />
    </div>
    <div class="service-text-wrapper">
    <NavLink to="/course/design-thinking">
      <div class="service-text">
      <h2>Design Thinking </h2>
      <p>Design Thinking is an innovative problem-solving process rooted in ...</p>
        <div class="button">
          <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
        </div>
      </div>
    </NavLink>
    </div>
  </div>
</div>
        <div class="service-item">
        <div class="service">
          <div class="img">
            <img src="images/home/cawi1.jpg" alt=""/>
          </div>
          <div class="service-text-wrapper">
          <NavLink to="/course/robotics">
            <div class="service-text">
              <h2>Robotics ,Drone & IoT </h2>
              <p>In the Robotics course, you embark on a detailed journey through the world ...</p>
              <div class="button">
             
                <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
              
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service">
          <div class="img">
            <img src="images/home/phone-to-web.jpg" alt="" />
          </div>
          <div class="service-text-wrapper">
          <NavLink to="/course/programming">
            <div class="service-text">
            <h2>Programming & coding </h2>
            <p>This Programming & Coding course is an extensive foray into the languages ...</p>
              <div class="button">
                <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
              </div>
            </div>
          </NavLink>
          </div>
        </div>
      </div>
      <div class="service-item">
        <div class="service">
          <div class="img">
            <img src="images/home/cat1.jpg" alt="" />
          </div>
          <div class="service-text-wrapper">
          <NavLink to="/course/game">
            <div class="service-text">
            <h2>Game & Animation </h2>
            <p>Enter the imaginative world of Game & Animation with this comprehensive ...</p>
              <div class="button">
                <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
              </div>
            </div>
          </NavLink>
          </div>
        </div>
      </div>
    
      <div class="service-item">
        <div class="service">
          <div class="img">
            <img src="images/home/programming1.jpg" alt="" />
          </div>
          <div class="service-text-wrapper">
          <NavLink to="/course/cyber-safety">
            <div class="service-text">
            <h2>Cyber Safety & security </h2>
            <p>The Cyber Safety & Security course begins by introducing you ...</p>
              <div class="button">
                <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
              </div>
            </div>
          </NavLink>
          </div>
        </div>
      </div>
      <div class="service-item">
      <div class="service">
        <div class="img">
          <img src="images/home/cawi1.jpg" alt=""/>
        </div>
        <div class="service-text-wrapper">
        <NavLink to="/course/cad">
          <div class="service-text">
            <h2>3D  Prototyping & CAD </h2>
            <p>The 3D Prototyping & CAD course starts by introducing you to the fundamentals ...</p>
            <div class="button">
           
              <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
            
            </div>
          </div>
          </NavLink>
        </div>
      </div>
    </div>
    <div class="service-item">
      <div class="service">
        <div class="img">
          <img src="images/home/ai.jpg" alt="" />
        </div>
        <div class="service-text-wrapper">
        <NavLink to="/course/ai">
          <div class="service-text">
          <h2>AI & ML </h2>
          <p>The AI & Machine Learning course begins with an introduction to the foundational ...</p>
            <div class="button">
              <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
            </div>
          </div>
        </NavLink>
        </div>
      </div>
    </div>
    <div class="service-item">
      <div class="service">
        <div class="img">
          <img src="images/home/ar-vr.jpg" alt="" />
        </div>
        <div class="service-text-wrapper">
        <NavLink to="/course/metaverse">
          <div class="service-text">
          <h2>Metaverse - AR & VR</h2>
          <p>The course begins with an introduction to the Metaverse, discussing its potential ...</p>
            <div class="button">
              <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
            </div>
          </div>
        </NavLink>
        </div>
      </div>
    </div>
  
    <div class="service-item">
      <div class="service">
        <div class="img">
          <img src="images/home/mc.jpg" alt="" />
        </div>
        <div class="service-text-wrapper">
        <NavLink to="/course/mobile-computing">
          <div class="service-text">
          <h2>Mobile Computing -App </h2>
          <p>The course begins with an introduction to the mobile computing landscape, covering  ...</p>
            <div class="button">
              <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
            </div>
          </div>
        </NavLink>
        </div>
      </div>
    </div>
    <div class="service-item">
    <div class="service">
      <div class="img">
        <img src="images/home/cloud.jpg" alt="" />
      </div>
      <div class="service-text-wrapper">
      <NavLink to="/course/cloud">
        <div class="service-text">
        <h2>Cloud Computing - Web </h2>
        <p>The course begins with an overview of cloud computing, discussing its importance ...</p>
          <div class="button">
            <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
          </div>
        </div>
      </NavLink>
      </div>
    </div>
  </div>
  <div class="service-item">
  <div class="service">
    <div class="img">
      <img src="images/home/international.jpg" alt="" />
    </div>
    <div class="service-text-wrapper">
    <NavLink to="/course/competitions">
      <div class="service-text">
      <h2>National & International Competitions </h2>
      <p>Discover a range of competitions across fields like robotics, programming ...</p>
        <div class="button">
          <span> <i class="fa-solid fa-file-lines"></i> <span>Read More</span></span>
        </div>
      </div>
    </NavLink>
    </div>
  </div>
</div>

        </Slider>
      </div>
    );
  }
}
