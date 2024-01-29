import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered, FaAngleRight, FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [nav, setNav] = useState();
  const [tab, setTab] = useState();
  const navToggle = () => {
    setNav(!nav);
  };
  const tabToggle = () => {
    setTab(!tab);
  };
  const allClose = () => {
    setTab(false);
    setNav(false);
  };

  return (
    <div>
      <header>
        <div className="header position-relative">
          <nav>
            <div className="nav-left">
              <div className="logo  ">
                <NavLink onClick={allClose} to="/">
                  <img src="/logo/STEAM_VARSITY_Logo_2.png" alt="logo" />
                </NavLink>
              </div>
              <div className={nav ? "menu active" : "menu "}>
                <ul className="main-ul">
                  <li>
                    <NavLink className="down-btn" to="/">
                      Who we are{" "}
                    </NavLink>
                    <span className="switch-toggle ">
                      <FaAngleDown onClick={tabToggle} />
                    </span>
                    <div className={tab ? "drop open" : "drop "}>
                      <div className="drop-content-wrapper">
                        <ul className="main-page-link-wrapper">
                          <li className="overview">
                            <NavLink onClick={allClose} to="/about-us/">
                              Overview <FaAngleRight />
                            </NavLink>
                            <div className=" sub-drop-item">
                              <h3 className="h4">About Us</h3>
                              <p className="pb-4">
                                At STEAM Varsity, we blend Science, Technology,
                                Engineering, Arts and Mathematics to unlock a
                                world of creative possibilities. Our mission is
                                to inspire and prepare the next generation of
                                innovators, creators, and problem-solvers.{" "}
                              </p>
                              <NavLink
                                onClick={allClose}
                                to="/about-us/"
                                className="btns  "
                              >
                                <span className="text-white">Join us</span>{" "}
                              </NavLink>
                            </div>
                          </li>

                          <li>
                            <NavLink onClick={allClose} to="/about-us/">
                              About Us{" "}
                            </NavLink>
                          </li>
                          {
                            //      <li><NavLink onClick={allClose} to="/stories">Stories </NavLink>
                            //     </li>
                            //     <li><NavLink onClick={allClose} to="/social-works">Social Works </NavLink>
                            // </li>
                          }
                          <li>
                            <NavLink onClick={allClose} to="/events/">
                              Events{" "}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink className="down-btn" to="/">
                      Facilitators
                    </NavLink>
                    <span className="switch-toggle ">
                      <FaAngleDown onClick={tabToggle} />
                    </span>
                    <div className={tab ? "drop open" : "drop "}>
                      <div className="drop-content-wrapper">
                        <ul className="main-page-link-wrapper">
                          <li>
                            <NavLink onClick={allClose} to="/facilitators/">
                              Become a Facilitator
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              onClick={allClose}
                              to="/hire-facilitators/"
                            >
                              Hire a Facilitator
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink onClick={allClose} to="/students/">
                      Students
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={allClose} to="/steam-tinkering-lab/">
                      STEAM Tinkering Lab
                    </NavLink>
                  </li>

                  <div className="nav-top-mobile">
                    <ul>
                      <li>
                        <NavLink onClick={allClose} to="/contact-us/">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
            <div className="nav-right">
              <ul className="mb-0 mr-3 panal flex-centet-start">
                <li>
                  <NavLink onClick={allClose} to="/contact-us/">
                    Contact Us
                  </NavLink>
                </li>

                <li className="search-btn">
                  <FaSearch />
                </li>
              </ul>

              <div className="bar">
                <span onClick={() => navToggle()}>
                  <FaBarsStaggered />
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
