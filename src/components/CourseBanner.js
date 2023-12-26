import React from "react";

const CourseBanner = ({  image, heading, para }) => {
  return (
    <div>
      <div className="banner1-wrapper">
        <div className="wrapper position-relative">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="content-wrapper">
            <div className="content costum-container">
              <div className="row">
                <div className="col-md-6 text-white">
                 
                  <h1 className="fw-bold">{heading}</h1>
                  <p>
                 {para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
