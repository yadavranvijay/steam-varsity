import { FaLinkedin ,FaSquareInstagram ,FaSquareXTwitter ,FaLocationDot ,FaPhone,FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterPunchline = ({data}) => {
  return (
    <div>
    
    <section className="py-5 location-wrapper">
    <div className="container">
      <form action="form/form.php" method="POST">
        <div className="row justify-content-between flex-wrap-reverse">
          <div className="col-md-5  home-form">
            <div className="row ">
              <div className="col-12">
                <input type="text" id="firstName" name="firstName" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-12 mt-3">
                <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-12 mt-3">
                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
              </div>

              <div className="col-12 mt-3">
                <input type="text" id="company" name="company" className="form-control" placeholder="Company Name" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 my-3">
                <textarea className="form-control" rows="4" name="message" placeholder="Message"
                  id="floatingtextarea"></textarea>
              </div>
            </div>
            <div className="mt-0    mb-3">
              <button className="btn" type="submit">Submit</button>
            </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0 position-relative">
            <div className="wrapper">
              
            <h2>Contact Info</h2>
            <ul className="ps-0">
              <li className="d-flex">
                <span className="icon-box me-2">
                <FaLocationDot />
                </span>
                <span>
                  <p>
                    {" "}
                    5th Floor, 501, JMD Megapolis IT Park, Sohna Road, Sector
                    48, Gurugram, Gurugram, Haryana, 122018
                  </p>
                </span>
              </li>
              <li>
                <span className="icon-box me-2">
                <FaPhone />
                </span>
                <NavLink href="tel:+911244221101"> +91 124 422 1101</NavLink>
              </li>
              <li>
                <span className="icon-box me-2">
                <FaRegEnvelope />
                </span>
                <NavLink
                  href="mailto:rfq@continuuminsights.com"
                  target="_blank"
                  rel="noopener"
                >
                  rfq@continuuminsights.com
                </NavLink>
              </li>
            </ul>
            <div className="socal">
            <NavLink
              href="https://www.NavLinkedin.com/company/continuum-insights/"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink
              href="https://www.facebook.com/continuuminsights"
              target="_blank"
              rel="noopener"
            >
            <FaFacebookSquare />
            </NavLink>
            <NavLink
              href="https://www.instagram.com/continuuminsight/"
              target="_blank"
              rel="noopener"
            >
            <FaSquareInstagram />
            </NavLink>
            <NavLink
              href="https://mobile.twitter.com/surveyplatform"
              target="_blank"
              rel="noopener"
            >
            <FaSquareXTwitter />
            </NavLink>
          </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
    </div>
  )
}

export default FooterPunchline