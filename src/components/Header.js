import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch  } from "react-icons/fa";
import { FaBarsStaggered,FaAngleRight ,FaAngleDown } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
const[nav ,setNav] = useState()

const navToggle=()=>{
  setNav(!nav)
}


  return (
    <div>
    <header>
  <div className="header position-relative">
    <nav>
      <div className="nav-left">
        <div className="logo  ">
          <NavLink to="/"><img src="/logo/STEAM_VARSITY_Logo_2.png" alt="logo" /></NavLink>
        </div>
        <div className={nav ?"menu active" :"menu "}>
          <ul className="main-ul">
            {
            //   <li>
            //   <NavLink>What we do </NavLink> <span className="switch-toggle tc1"></span>
            //   <div className="drop  ">
            //     <div className="drop-content-wrapper">
            //       <ul className="main-page-link-wrapper">

            //         <li><NavLink to="/">Overview <FaAngleRight/> </NavLink> <span
            //             className="plus-icon "><AiOutlinePlus /></span>
            //             <div className=" sub-drop-item">
            //             <h3 className="h4">Access millions of respondents all over the globe.
            //             </h3>
            //             <p className="pb-4">Quality responses begin and end with verified, double-opted in members that choose to engage in online studies. Quest leverages many types of sample sources when recruiting respondents </p>
            //             <NavLink to="/" className="btn">Learn More</NavLink>
            //           </div>
            //         </li>
            //         <li><NavLink to="/">Services <FaAngleRight/></NavLink> <span
            //             className="plus-icon"><AiOutlinePlus /></span>
            //           <div className=" sub-drop-item">
            //             <ul>
            //               <li><NavLink to="/CAWI">CAWI</NavLink></li>
            //               <li><NavLink to="/phone-to-web">Phone To Web</NavLink></li>
            //               <li><NavLink to="/CATI">CATI</NavLink></li>
            //               <li><NavLink to="/IDI">IDI</NavLink></li>
            //               <li><NavLink to="/programming&data-processing">Programming & Data Processing </NavLink></li>
                          
            //             </ul>
            //           </div>
            //         </li>
            //         { //<li><NavLink to="/"> Security <FaAngleRight/></NavLink> <span
            //         //     className="plus-icon"><AiOutlinePlus /></span>
            //         //   <div className=" sub-drop-item">
            //         //     <ul>
            //         //       <li><NavLink to="/">lorem</NavLink></li>
            //         //       <li><NavLink to="/">lorem</NavLink></li>
            //         //       <li><NavLink to="/">lorem</NavLink></li>

            //         //     </ul>
            //         //   </div>
            //         // </li>
            //       }
                    
            //       </ul>
            //     </div>
            //   </div>
            // </li>
          }
            <li>
              <NavLink to="/">Who we are </NavLink><span className="switch-toggle "><FaAngleDown/></span>
              <div className="drop drop-2 ">
                <div className="drop-content-wrapper">
                  <ul className="main-page-link-wrapper">
                   <li><NavLink to="/about-us">Overview <FaAngleRight/></NavLink>
                    <div className=" sub-drop-item">
                      <h3 className="h4">About Us
                      </h3>
                      <p className="pb-4">At Steam Varsity, we blend Science, Technology, Engineering, Arts, and Mathematics to unlock a world of creative possibilities. Our mission is to inspire and prepare the next generation of innovators, creators, and problem-solvers. </p>
                      <NavLink to="/about-us" className="btns  "> <span className='text-white'>Join us</span> </NavLink>
                   </div>
                   </li>
                 
                    <li><NavLink to="/about-us">About Us </NavLink> <span
                        className="plus-icon"><AiOutlinePlus /></span>
                      
                    </li>
                    <li><NavLink to="/stories">Stories </NavLink> <span
                        className="plus-icon"><AiOutlinePlus /></span>
                      
                    </li>
                    <li><NavLink to="/social-works">Social Works </NavLink> <span
                    className="plus-icon"><AiOutlinePlus /></span>
                  
                </li>
            
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/students">Students</NavLink>
            </li>
            <li>
              <NavLink to="/facilitators">Facilitators</NavLink>
            </li>
            <li>
            <NavLink to="/">Blog</NavLink>
          </li>
            
            <div className="nav-top-mobile">
              <ul>
                <li><NavLink to="/">Panel Portal</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink to="/" target="_blank" rel="noopener">Join Us</NavLink></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="nav-right">
        <ul className="mb-0 mr-3 panal flex-centet-start">
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          
          <li className='search-btn'><FaSearch /></li>
        </ul>

        <div className="bar">
        <span onClick={() =>navToggle()}><FaBarsStaggered/></span>
         
        </div>
      </div>

    </nav>
  </div>
</header>

    
    
    </div>
  )
}

export default Header