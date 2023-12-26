import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const LatestNews = ({path}) => {
  const [toggler, setToggler] = useState();
  const [toggler2, setToggler2] = useState();
  const [toggler3, setToggler3] = useState();
 




  return (
    <div className="position-relative">
      <div className="row">
        <div className="col-md-4">
          <ul className="pedagogies-wrapper">
            <li className=" px-4 bt">
             
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler(true)}
              >
                <span className="name me-3"> ARTICLE <br />

                Reversal of fortune: how country weights of global equity markets have ebbed and flowed </span>
                <span className="toggle-btn">
                 
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-4 ">
             
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler2(true)}
              >
              <span className="name me-3"> ARTICLE <br />

              Reversal of fortune: how country weights of global equity markets have ebbed and flowed </span>
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-4 ">
             
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler3(true)}
              >
              <span className="name me-3"> ARTICLE<br />

              Reversal of fortune: how country weights of global equity markets have ebbed and flowed </span>
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
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
        
        
        <span>
        ARTICLE
        </span>
        <h3> Reversal of fortune: how country weights of global equity markets have ebbed and flowed</h3>
        
<NavLink to="/"> Find out more <span className="ms-2"><FaArrowRightLong /></span></NavLink>
</div>

        </div>
        
        
        </div>
        
        </div>
      
      </div>
    </div>
  );
};

export default LatestNews;
