import React, { useEffect } from "react";
import CourseBanner from "./components/CourseBanner";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
const Career = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bannerData = {
    image: "/images/career.jpg",
    heading: "Let's grow together.",
    para: "We are seeking passionate hearts. Skill or experience isn't necessary: talent and drive are much more important. We anticipate that the majority of our team will hail from a variety of areas and industries.",
  };
  return (
    <div className="page-content">
      <Helmet>
        <title>Career at STEAM Varsity</title>
        <meta
          name="description"
          content="Immerse yourself in the realm of creativity with our 3D Prototyping & CAD Course at STEAM Varsity. Learn the art of transforming concepts into reality, exploring the synergy between 3D prototyping and Computer-Aided Design. Elevate your skills and bring your ideas to life in the digital landscape."
        />
        <link rel="canonical" href="https://www.steamvarsity.com/career" />
      </Helmet>

      <CourseBanner {...bannerData} />
      <div className="career-form-wrapper py-5 " id="application-form">
        <div className="container">
          <h2 className="text-center">Application Form</h2>
          <form
            className=" needs-validation"
            action="https://formspree.io/f/xwkgeglk"
            method="Post"
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="p-relative  form-input-wrapper mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="First Name"
                    name="first-name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-relative  form-input-wrapper mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Last Name"
                    name="last-name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-relative  form-input-wrapper mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-relative  form-input-wrapper mb-3 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Contact No."
                    name="number"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div class="input-group mt-3 mb-3">
                  <label class="input-group-text" for="inputGroupFile01">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    accept=".webp,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                    aria-required="true"
                    aria-invalid="false"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-relative  form-input-wrapper mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="job"
                    placeholder="Job Title"
                    name="job"
                  />
                </div>
              </div>

              <div className="col mt-3">
                <div className="p-relative  form-input-wrapper">
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="5"
                    placeholder="Write Your Message"
                    name="message"
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="btn"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
