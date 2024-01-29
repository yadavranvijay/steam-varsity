import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const LatestNews = ({ path }) => {
  return (
    <div className="position-relative">
      <div className="row">
        <div className="col-md-4">
          <ul className="pedagogies-wrapper">
            <li className=" px-4 bt">
              <NavLink to="/STEAM-tinkering-workshop/" className="mb-0 d-flex justify-content-between align-items-center">
                <span className="name me-3 ">
                  
                  <strong>EVENT</strong> <br />
                  STEAM Tinkering Workshop 1-day Learning-by-Doing STEAM
                  (Science, Technology, Engineering, Arts and Mathematics)
                  Program to inspire the next generation of innovators.
                </span>
                <span className="toggle-btn">
                  <FaArrowRightLong />
                </span>
              </NavLink>
            </li>
            <li className=" px-4 ">
              <NavLink to="https://www.scienceindiafest.org/" className="mb-0 d-flex justify-content-between align-items-center">
                <span className="name me-3">
                  <strong> EVENT</strong>
                  <br />
                  India International Science Festival 2023
                </span>
                <span className="toggle-btn">
                 
                  <FaArrowRightLong />
                </span>
              </NavLink>
            </li>
            <li className=" px-4 ">
              <NavLink to="https://tgirf.in/" className="mb-0 d-flex justify-content-between align-items-center">
                <span className="name me-3">
                  <strong>EVENT</strong>
                  
                  <br />
                  THE GOA INTERNATIONAL
                  ROBOTICS FESTIVAL 2024
                </span>
                <span className="toggle-btn">
                  <FaArrowRightLong />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-md-8  h-100 ps-md-4">
          <div className="detail-wrapper bg-dark position-relative">
            <div className="img">
              <img src={path} alt="" />
            </div>
            <div className="content">
              <div>
                <span>EVENT</span>
                <h3 className="h4">
                STEAM Tinkering Workshop 1-day Learning-by-Doing STEAM
                (Science, Technology, Engineering, Arts and Mathematics)
                Program to inspire the next generation of innovators.
                </h3>

                <NavLink to="/STEAM-tinkering-workshop/">
              
                  Find out more
                  <span className="ms-2">
                    <FaArrowRightLong />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
