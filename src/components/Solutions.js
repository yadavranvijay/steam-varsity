import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import courseData from "./CourseData";
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
        {courseData.data.map((item, index) => (
         <div class="service-item" key={index}>
            <div class="service">
              <div class="img">
                <img src={item.img1} alt="" />
              </div>
              <div class="service-text-wrapper">
                <NavLink to={item.link}>
                  <div class="service-text">
                    <h3>{item.heading} </h3>
                    <p>
                      {item.para} ...
                    </p>
                    <div class="button">
                      <span>
                        
                        <i class="fa-solid fa-file-lines"></i>
                        <span>Read More</span>
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
          
         
        </Slider>
      </div>
    );
  }
}
