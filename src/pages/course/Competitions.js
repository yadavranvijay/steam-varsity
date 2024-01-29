import React, { useEffect } from "react";
import CourseBanner from "../../components/CourseBanner";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Competitions = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bannerData = {
    image: "/images/course/course-banner10.jpg",
    heading: "National & International Competitions",
    para: "At STEAM Varsity, we believe in the power of competition to inspire innovation, excellence, and personal growth. That's why we offer our students the opportunity to participate in various national and international competitions. These events challenge participants to apply their learning, think creatively, and solve real-world problems while competing against peers from around the globe.",
  };
  return (
    <div className="page-content">
      <Helmet>
        <title>National & International Competitions at STEAM Varsity</title>
        <meta
          name="description"
          content="Participate in transformative learning experiences through our National & International Competitions at STEAM Varsity. Elevate your skills, showcase your talents, and join a community of innovators competing on a global scale. Embrace the challenge and redefine what's possible in the world of STEAM education."
        />
        <link
          rel="canonical"
          href="https://www.steamvarsity.com/course/competitions/"
        />
      </Helmet>
      <CourseBanner {...bannerData} />

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>Competitions</h2>

                <p>
                  Discover a range of competitions across fields like robotics,
                  programming, design, and more. Participating in these events
                  can enhance your resume, expand your network, and possibly
                  even earn scholarships or prizes.{" "}
                </p>

                <h3>National Competitions</h3>
                <p>
                  National competitions provide a platform for students to
                  compete within their country, allowing them to showcase their
                  skills against peers in similar educational contexts. These
                  events often serve as qualifiers for international
                  competitions.
                </p>

                <h3>International Competitions</h3>

                <p>
                  International competitions take the challenge to a global
                  level, inviting students from all over the world to compete.
                  These prestigious events are an opportunity to gain
                  international exposure and compete at a high level.
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
              <h2>Why Participate? </h2>

              <p>
                {" "}
                <strong>Skill Enhancement:</strong> Apply what you've learned in
                a real-world scenario and push your limits.
              </p>
              <p>
                <strong> Recognition:</strong> Gain national and international
                recognition for your skills and hard work.
              </p>
              <p>
                <strong>Networking:</strong> Connect with like-minded peers,
                industry professionals, and organizations.
              </p>
              <p>
                <strong> Career Opportunities:</strong> Enhance your resume and
                open doors to scholarships, internships, and job opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>How We Support You</h2>

                <p>
                  At STEAM Varsity, we provide resources and guidance to help
                  our students prepare for and participate in these
                  competitions. This includes:
                </p>
                <p>
                  <strong>Expert Instruction: </strong> Learn from experienced
                  developers and designers with industry experience.
                </p>
                <p>
                  <strong>Workshops and Training Sessions: </strong> To hone
                  your skills and knowledge.
                </p>
                <p>
                  <strong>Mentorship:</strong> Guidance from experienced
                  professionals and past competitors.
                </p>
                <p>
                  <strong>Resources and Tools:</strong> Access to necessary
                  software, hardware, and learning materials.
                </p>
                <p>
                  <strong>Team Formation:</strong>
                  Assistance in forming or joining a competitive team.
                </p>

                <h3>Who Should Enroll:</h3>
                <p>
                  This course is designed for students, aspiring developers, IT
                  professionals, and entrepreneurs interested in leveraging
                  cloud computing for web development. Whether you're looking to
                  build your own web applications, enhance your career, or
                  understand how the cloud can benefit your business, this
                  course provides the knowledge and skills you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
