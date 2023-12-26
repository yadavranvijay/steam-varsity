
import React, { Component } from "react";
import Slider from "react-slick";
export default class HomeAboutSlider extends Component {
  render() {
    const settings = {
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
        <div class="banner-slide-item">
        <p> <strong>Partners</strong></p>
        <h2>500+</h2>
        <p>Collaborating with strategic partners to drive innovation and mutual success. </p>
      </div>
      <div class="banner-slide-item">
        <p><strong>Publisher </strong></p>
        <h2>1000+</h2>
        <p>Engage with our diverse publisher network to share and amplify meaningful content.</p>
      </div>
      <div class="banner-slide-item">
        <p><strong>Countries</strong> </p>
        <h2>130+</h2>
        <p>Our platform spans borders, catering to users in diverse countries around the globe. </p>
      </div>
      <div class="banner-slide-item">
        <p><strong>Languages</strong> </p>
        <h2>20+</h2>
        <p>
        Diverse content offerings in multiple languages for a global audience. </p>
      </div>
        </Slider>
      </div>
    );
  }
}
