import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import courseData from "./CourseData";
const Cources = () => {
  return (
    <div>
      <div className="bg2 cources-section py-5">
        <div className="container">
          <div className="heading pb-4">
            <h2 className="fw-bold">A Suite of Hands-On STEAM Tinkering Programs for Every Age</h2>
            <p>
              Empower your journey through STEAM education with STEAM Varsity,
              where creativity meets innovation in science, technology,
              engineering, Arts and mathematics. Discover a world of knowledge
              and opportunity at your fingertips!
            </p>
          </div>
          <div className="row  p-relative">
            {courseData.data.map((item, index) => (
              <div className="col-md-4    mb-4" key={index}>
                <div className="content-wrapper h-100">
                  <div className="content">
                    <div className="img">
                      <img src={item.img2} alt="" />
                    </div>
                    <div className="text">
                      <h3 className="h5 fw-bold">{item.heading}</h3>
                      <p>{item.para} ...</p>
                      <Link to={item.link} className="more-less-btn">
                        <span className="span me-2 Bold">Read More</span>
                        <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
