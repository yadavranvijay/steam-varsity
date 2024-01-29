import React from "react";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import { FaRegFileLines } from "react-icons/fa6";

const HomeBanner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: "11.5%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
   
      {
        breakpoint: 550,
        settings: {
          centerPadding: "0%",
        },
      },
    ],

  };
  return (
    <div>
      <Slider {...settings}>
      <div className="swiper-slide">
          <div className="banner-item  ">
            <div className="differentiator-item-wrapper">
              <div className="img">
                <img src="/images/home/b1.jpg" alt="" />
              </div>
            </div>
            <div class="home-banner-content ">
              <div className="home-content">
                <h1 class="home-banner-title">Learning beyond boundaries</h1>

                <div className="hide-content">
                  <p>
                  Discover a world of knowledge with us, where learning extends beyond boundaries, unlocking limitless possibilities for personal and academic growth.
                  </p>
                  <Link className="btn" to="/blog/learning-beyond-boundaries/">
                  Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-item ">
            <div className="differentiator-item-wrapper">
              <div className="img position-relative" >
                <img src="/images/home/b2.jpg" alt="" />
               
              </div>
             
            </div>
            <div class="home-banner-content ">
            <div className="home-content">
              <h2 class="home-banner-title h1">STEAM Education</h2>

              <div className="hide-content">
                <p>
                Science, Technology, Engineering, Arts and Mathematics (STEAM) for Innovation and Entrepreneurship .
                </p>
                <Link className="btn" to="/blog/steam-education/">
                Read More
                </Link>
              </div>
            </div>
          </div>
            
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner-item ">
            <div className="differentiator-item-wrapper">
              <div className="img">
                <img src="/images/home/b3.jpg" alt="" />
              </div>
            </div>
            <div class="home-banner-content ">
              <div className="home-content">
                <h2 class="home-banner-title h1">Learning by doing </h2>

                <div className="hide-content">
                  <p>
                  We believe in learning by doing, where hands-on experiences transform knowledge into skills, fostering a dynamic and practical approach to education.
                  </p>
                  <Link className="btn" to="/blog/learning-by-doing/">
                  Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="swiper-slide">
          <div className="banner-item ">
            <div className="differentiator-item-wrapper">
              <div className="img">
                <img src="/images/home/b4.jpg" alt="" />
              </div>
            </div>
            <div class="home-banner-content ">
              <div className="home-content  ">
                <h2 class="home-banner-title h1">STEAM VARSITY Purpose</h2>

                <div className="hide-content">
                  <p>
                  Where Science Meets Art, Technology Sparks Imagination: STEAM Education, Where Dreams Evolve, Minds Flourish, Future Innovates.
                  </p>
                  <Link className="btn" to="/blog/steam-varsity-purpose/">
                   Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
