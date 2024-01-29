import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Blog = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="page-content blog-bg">
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="Unlock the full potential of experiential learning with STEAM Varsity's 'Learning by Doing' blog. Discover how hands-on education fosters deeper understanding, enhances skills, and prepares you for real-world challenges. Embrace a learning approach that's as dynamic and innovative as you are."
        />
        <link rel="canonical" href="https://www.steamvarsity.com/blog/" />
      </Helmet>

      <div className="container all-blog-wrapper py-5">
        <div className="heading">
          <h1>Our Blogs</h1>
         
        </div>
        <div className="row mt-5">
        <h2>Latest blog</h2>
        <div className="col-md-12 mt-4">
            <NavLink to="/blog/project-based-learning/">
              <div className="wrapper latest-blog">
                <div className="img-wrapper">
                  <img  src="/images/blog/project.jpg" alt="" />
                </div>

                <div className="text mt-3">
                <span className="date">january 28, 2024 </span>
                  <h3 className="text-dark pt-3 mb-0">Project-Based Learning</h3>
                  <p>Project-based learning (PBL) is a teaching approach that engages students in designing, developing...</p>
                  <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
                </div>
              </div>
            </NavLink>
          </div>
          <h2 className="mt-5 mb-0">All Blogs</h2>
          <div className="col-md-6 mt-4">
          <NavLink to="/blog/problem-based-learning/">
            <div className="wrapper ">
              <div className="img-wrapper">
                <img  src="/images/blog/problem1.jpg" alt="" />
              </div>

              <div className="text mt-3">
              <span className="date">january 20, 2024 </span>
                <h3 className="text-dark pt-3 mb-0">Problem-Based Learning</h3>
                <p>Problem-based learning (PBL) is a teaching methodology that focuses on promoting student-centered...</p>
                <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
              </div>
            </div>
          </NavLink>
        </div>
          <div className="col-md-6 mt-4">
            <NavLink to="/blog/steam-varsity-purpose/">
              <div className="wrapper">
            
                <div className="img-wrapper">
                  <img  src="/images/blog/Purpose.jpg" alt="" />
                </div>

                <div className="text mt-3">
                <span className="date">December 31, 2023 </span>
                  <h3 className="text-dark pt-3 mb-0">STEAM Varsity Purpose</h3>
                  <p>At STEAM Varsity, we are passionate about revolutionizing education by adopting a dynamic approach that...</p>
                  <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
                </div>
              </div>
            </NavLink>
          </div>
           <div className="col-md-6 mt-4">
            <NavLink to="/blog/steam-education/">
              <div className="wrapper">
            
                <div className="img-wrapper">
                  <img  src="/images/blog/steam-education.jpg" alt="" />
                </div>

                <div className="text mt-3">
                <span className="date">December 28, 2023 </span>
                  <h3 className="text-dark pt-3 mb-0">STEAM EDUCATION</h3>
                  <p>STEAM education is an interdisciplinary approach to learning that aims to integrate multiple subjects such as...</p>
                  <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
                </div>
              </div>
            </NavLink>
          </div>
           <div className="col-md-6 mt-4">
            <NavLink to="/blog/learning-beyond-boundaries/">
              <div className="wrapper">
            
                <div className="img-wrapper">
                  <img  src="/images/blog/beyond-boundaries.jpg" alt="" />
                </div>

                <div className="text mt-3">
                <span className="date">December 27, 2023 </span>
                  <h3 className="text-dark pt-3 mb-0">Learning Beyond Boundaries</h3>
                  <p>STEAM VARSITY is an educational institution that has adopted the "Learning beyond boundaries" philosophy...</p>
                  <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-6 mt-4">
            <NavLink to="/blog/learning-by-doing/">
              <div className="wrapper">
            
                <div className="img-wrapper">
                  <img  src="/images/blog/learning-by-doing.jpg" alt="" />
                </div>

                <div className="text mt-3">
                <span className="date">December 25, 2023 </span>
                  <h3 className="text-dark pt-3 mb-0">Learning by Doing</h3>
                  <p>At STEAM Varsity, we strongly believe that active learning is essential for effective education. We...</p>
                  <span className="read-more">Read More <MdOutlineDoubleArrow /></span>
                </div>
              </div>
            </NavLink>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Blog;
