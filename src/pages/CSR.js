import React, { useEffect } from "react";
import CourseBanner from "../components/CourseBanner";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const AI = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bannerData = {
    image: "/images/services/csr-banner.jpg",
    heading: "Corporate Social Responsibility ",
    para: "Together, at STEAM Varsity, we are committed to making a difference, not just in the field of education, but in society at large, through our dedicated and thoughtful CSR initiatives.",
  };
  return (
    <div className="page-content">
      <Helmet>
        <title>
        STEAM Varsity's CSR Initiatives - Empowering Communities through Education
        </title>
        <meta
          name="description"
          content="Dive into STEAM Varsity's commitment to Corporate Social Responsibility. Learn about our efforts in educational equity, environmental sustainability, and community engagement, as we strive to make a meaningful impact through ethical and responsible practices."
        />
        <link rel="canonical" href="https://www.steamvarsity.com/course/csr/" />
      </Helmet>

      <CourseBanner {...bannerData} />

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <div className="wrapper">
                <h2>Corporate Social Responsibility (CSR) at STEAM Varsity</h2>
                <p>
                  At STEAM Varsity, we believe in the power of education to
                  transform lives and communities. Our Corporate Social
                  Responsibility (CSR) initiatives are rooted in this belief,
                  driving us to create positive change through our actions. We
                  are dedicated to upholding ethical standards, fostering
                  educational equity, and promoting environmental
                  sustainability.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="img-wrapper">
                <img src="/images/services/about-csr.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>Our CSR Pillars</h2>

                <h3>Educational Equity and Access:</h3>

                <ul>
                  <li>
                    <strong> Objective: </strong>To bridge the educational gap
                    by providing STEAM learning opportunities to underprivileged
                    communities.
                  </li>
                  <li>
                    <strong>Initiatives: </strong>
                    <ul>
                      <li>
                        <strong>Scholarship Programs: </strong> Offering
                        scholarships to students from low-income families for
                        STEAM education.
                      </li>
                      <li>
                        <strong>School Partnerships: </strong> Collaborating
                        with schools in underserved areas to establish STEAM
                        labs and provide resources.
                      </li>
                      <li>
                        <strong>Teacher Training: </strong>
                        Conducting training programs for educators in these
                        communities to enhance STEAM teaching skills.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4>Environmental Sustainability:</h4>
                <ul>
                  <li>
                    <strong> Aim: </strong> To minimize our ecological footprint
                    and foster environmental consciousness in our students.
                  </li>
                  <li>
                    <strong> Actions: </strong>
                    <ul>
                      <li>
                        <strong>Green Practices in Labs: </strong> Implementing
                        eco-friendly practices in our labs, such as using
                        sustainable materials and recycling.
                      </li>
                      <li>
                        <strong>Community Clean-Up Drives: </strong> Organizing
                        events that encourage students and staff to participate
                        in local environmental conservation efforts.
                      </li>
                      <li>
                        <strong>Awareness Campaigns: </strong>
                        Educating students and the community about environmental
                        issues and sustainable living.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h3>Community Engagement and Development</h3>
                <ul>
                  <li>
                    <strong> Focus: </strong>Strengthening community bonds and
                    supporting local development.
                  </li>
                  <li>
                    <strong> Programs: </strong>
                    <ul>
                      <li>
                        <strong>Volunteering Initiatives: </strong> Encouraging
                        our staff and students to volunteer in local community
                        projects.
                      </li>
                      <li>
                        <strong>STEAM Workshops: </strong> Hosting free
                        workshops and events for the community, focusing on
                        STEAM education and its benefits.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <div className="bg2">
        <div className="container py-5 ">
      <div className="row">
        <div className="col">
          <div className="wrapper">
            <h2>Our Approach to CSR </h2>
            <p> <strong>Collaboration:  </strong>
             We believe in the power of partnerships and actively seek collaborations with NGOs, government bodies, and other organizations to amplify our impact.</p>
            <p> <strong>Transparency and Reporting:  </strong>
             We are committed to transparently reporting our CSR activities, ensuring our stakeholders are informed of our progress and impact.</p>
            <p> <strong>Employee Involvement:  </strong>
             We encourage our employees to take an active role in our CSR initiatives, fostering a culture of social responsibility within our organization. </p>

            <h3>Future Commitments</h3>
            
            <p> <strong>Expanding Reach:  </strong>
             We aim to extend our CSR initiatives to more communities, ensuring that more students have access to quality STEAM education.</p>
            <p> <strong>Innovative Solutions:  </strong>
             We plan to continuously explore innovative ways to integrate social responsibility into our business model and educational approach.
            </p>

           
          </div>
        </div>
      </div>
    </div>
      </div>
    <div className="container py-5 ">
    <div className="row">
      <div className="col">
        <div className="wrapper">
        <h2>Get Involved </h2>
        <p> We welcome participation and suggestions from all our stakeholders. Whether you are a student, parent, educator, or community member, your input and engagement are valuable to us. Please reach out to us through to submit your contact details  to share your ideas or to learn more about our CSR initiatives.</p>
          
         
        </div>
      </div>
    </div>
  </div>
   
    </div>
  );
};

export default AI;
