import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { FaTimes } from "react-icons/fa";
const Pedagogies = () => {
  const [toggler, setToggler] = useState();
  const [toggler2, setToggler2] = useState();
  const [toggler3, setToggler3] = useState();
  const [toggler4, setToggler4] = useState();
  const [toggler5, setToggler5] = useState();
  const [toggler6, setToggler6] = useState();
  const [toggler7, setToggler7] = useState();
  const [toggler8, setToggler8] = useState();
  const [toggler9, setToggler9] = useState();
  const [toggler10, setToggler10] = useState();
  const [toggler11, setToggler11] = useState();
  const [toggler12, setToggler12] = useState();
  const [toggler13, setToggler13] = useState();
  const [toggler14, setToggler14] = useState();
  const [toggler15, setToggler15] = useState();


  const cancelBtn = () => {
    setToggler(false);
    setToggler2(false);
    setToggler3(false);
    setToggler4(false);
    setToggler5(false);
    setToggler6(false);
    setToggler7(false);
    setToggler8(false);
    setToggler9(false);
    setToggler10(false);
    setToggler11(false);
    setToggler12(false);
    setToggler13(false);
    setToggler14(false);
    setToggler15(false);
  };

  return (
    <div className="position-relative">
      <div className="row">
        <div className="col-md-4">
          <ul className="pedagogies-wrapper">
            <li className=" px-3 bt">
              <div
                className={toggler ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Learning by Doing: Unleashing Knowledge Through
                          Experience
                        </h3>
                        <p>
                          At STEAM VARSITY, we embrace the philosophy of
                          "Learning by Doing" as the cornerstone of our
                          educational approach. We believe that true
                          understanding comes not just from theory but from
                          immersive experiences. Through hands-on activities,
                          experiments, and real-world applications, our students
                          don't just learn concepts – they live them. This
                          dynamic approach not only instills practical skills
                          but also cultivates a mindset of curiosity,
                          exploration, and innovation. Join us in the journey of
                          active learning, where every discovery is a step
                          toward mastery
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/learning-by-doing.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler(true)}
              >
                <span className="name">Learning by doing </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler2 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Research-Based Learning: Igniting Discovery in
                          Education
                        </h3>
                        <p>
                          At STEAM Varsity, we champion "Research-Based
                          Learning" as the catalyst for meaningful education. We
                          believe in empowering students as active
                          investigators, where learning transcends textbooks
                          into the realm of hands-on exploration. Through
                          research projects, inquiry-driven activities, and
                          real-world investigations, our students not only
                          absorb information but actively contribute to its
                          creation. This dynamic approach not only instills
                          critical thinking skills but also cultivates a
                          deep-seated love for discovery, innovation, and
                          lifelong learning. Join us on the journey where every
                          student is a researcher, every question sparks an
                          exploration, and education is a pathway to endless
                          possibilities.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/research-based-learning.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler2(true)}
              >
                <span className="name">Research-based learning </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler3 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Learning from Failures: Nurturing Resilience in
                          Education
                        </h3>
                        <p>
                          At STEAM Varsity, we embrace the invaluable lessons
                          found in "Learning from Failures." We understand that
                          setbacks are not roadblocks but stepping stones to
                          growth. Through hands-on challenges, reflective
                          exercises, and a supportive environment, our students
                          discover that failure is not the end but a crucial
                          part of the learning journey. By fostering resilience
                          and perseverance, we empower students to turn setbacks
                          into opportunities, transforming every stumble into a
                          stride toward success. Join us at STEAM Varsity, where
                          the path to knowledge is paved with the valuable
                          lessons that failure can teach.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/learning-from-faliours.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler3(true)}
              >
                <span className="name">Learning from Failures </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler4 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Learning Beyond Boundaries: Expanding Horizons at
                          STEAM Varsity
                        </h3>
                        <p>
                          At STEAM VARSITY, we embrace the philosophy of
                          "Learning by Doing" as the cornerstone of our
                          educational approach. We believe that true
                          understanding comes not just from theory but from
                          immersive experiences. Through hands-on activities,
                          experiments, and real-world applications, our students
                          don't just learn concepts – they live them. This
                          dynamic approach not only instills practical skills
                          but also cultivates a mindset of curiosity,
                          exploration, and innovation. Join us in the journey of
                          active learning, where every discovery is a step
                          toward mastery
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/lb-boundries.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler4(true)}
              >
                <span className="name">Learning Beyond Boundaries </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler5 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Educate to Innovate: Nurturing Creative Minds at STEAM
                          Varsity
                        </h3>
                        <p>
                          At STEAM Varsity, we stand by the mantra of "Educate
                          to Innovate." Our commitment goes beyond traditional
                          education; it's about cultivating a mindset of
                          creativity and innovation. Through dynamic STEAM
                          programs, hands-on projects, and a curriculum designed
                          to inspire curiosity, we empower students to think
                          outside the box. Join us in fostering a culture where
                          education is a springboard for innovation, and every
                          lesson is a step towards creating a future filled with
                          groundbreaking ideas.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/Educate-to-Innovate.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler5(true)}
              >
                <span className="name">Educate to Innovate </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="pedagogies-wrapper">
            <li className=" px-3 bt">
              <div
                className={toggler6 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Peer Learning: Elevating Education Through
                          Collaboration
                        </h3>
                        <p>
                          At STEAM Varsity, we thrive on "Peer Learning," a
                          cornerstone of our educational vision. We believe in
                          learning from one another, where students actively
                          contribute, share insights, and collectively deepen
                          their understanding. Through collaborative projects,
                          group discussions, and interactive workshops, Peer
                          Learning transforms education into a dynamic, shared
                          experience. Beyond the classroom, it fosters empathy,
                          active engagement, and real-world preparation, shaping
                          students into collaborative thinkers. Join us at STEAM
                          Varsity, where education is a collective journey of
                          exploration and shared discovery.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/peer-learning.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler6(true)}
              >
                <span className="name">Peer learning </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler7 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>Peer Mentoring: Empowering Through Connection</h3>
                        <p>
                          Experience the power of "Peer Mentoring" at STEAM
                          Varsity, where students uplift each other on the
                          journey of knowledge. Our program connects experienced
                          students with peers, creating a supportive network for
                          academic growth and personal development. Through this
                          collaborative approach, mentors share insights, offer
                          guidance, and foster a sense of community. Join us in
                          a learning environment where the wisdom of experience
                          meets the enthusiasm of curiosity, and students
                          empower each other to thrive.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/peer-mentoring.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler7(true)}
              >
                <span className="name">Peer Mentoring </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler8 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Cognitive Learning: Unleashing Minds at STEAM Varsity
                        </h3>
                        <p>
                          Discover the essence of "Cognitive Learning" at STEAM
                          Varsity, where education is not just about facts but
                          about transforming the way minds think. Our approach
                          focuses on understanding how students process
                          information, fostering critical thinking,
                          problem-solving, and decision-making skills. Through
                          engaging activities and personalized learning, we
                          empower students to actively construct knowledge,
                          leading to a deeper, more meaningful comprehension of
                          the subjects. Join us on a cognitive journey where
                          every lesson is a key to unlocking the full potential
                          of your mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/cognitive-learning.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler8(true)}
              >
                <span className="name">Cognitive Learning </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler9 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          SWOT Analysis: Navigating Strengths, Weaknesses,
                          Opportunities, and Threats
                        </h3>
                        <p>
                          Embark on a strategic exploration with our SWOT
                          analysis at STEAM Varsity. We assess the Strengths,
                          Weaknesses, Opportunities, and Threats in our
                          educational approach to ensure a holistic and dynamic
                          learning environment. <br />
                          <strong>Strengths:</strong> <br />
                          Benefit from experienced faculty, innovative
                          curriculum, and state-of-the-art facilities, enhancing
                          the overall learning experience. <br />
                          <strong>Weaknesses:</strong> <br />
                          Acknowledge areas for improvement, fostering a
                          commitment to continuous enhancement and adaptability.{" "}
                          <br />
                          <strong> Opportunities:</strong> <br />
                          Seize the chance to integrate emerging technologies,
                          educational trends, and global perspectives into our
                          programs. <br />
                          <strong>Threats: </strong> <br />
                          Address challenges head-on, ensuring a resilient and
                          future-ready educational experience for every student.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/SWOT-analysis.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler9(true)}
              >
                <span className="name"> SWOT Analysis </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler10 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Mind Mapping: Charting the Path to Creative Learning
                        </h3>
                        <p>
                          At STEAM Varsity, we embrace the power of "Mind
                          Mapping" as a dynamic tool for creative learning. Our
                          students engage in visual thinking, connecting ideas
                          and concepts in a structured yet flexible format.
                          Through mind maps, we encourage a holistic approach to
                          understanding, sparking creativity, and enhancing
                          memory retention. Join us on a cognitive journey where
                          mind mapping becomes a catalyst for insightful
                          exploration and a roadmap to unlocking the full
                          potential of the mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/mind-mapping.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler10(true)}
              >
                <span className="name">Mind Mapping </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="pedagogies-wrapper">
            <li className=" px-3 bt">
              <div
                className={toggler11 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Mixed-Age Learning: A Tapestry of Collaboration at
                          STEAM Varsity
                        </h3>
                        <p>
                          Experience the richness of "Mixed-Age Learning" where
                          diverse ages come together in a tapestry of
                          collaboration. At STEAM Varsity, our classrooms
                          transcend traditional boundaries, fostering an
                          environment where younger minds are inspired by the
                          wisdom of their elder peers, and experienced students
                          thrive in mentorship roles. This approach not only
                          encourages empathy but also promotes a dynamic
                          exchange of ideas, creating a community that values
                          the unique contributions each age group brings. Join
                          us in a learning environment where the blend of ages
                          enriches the educational experience, fostering a sense
                          of unity and shared growth.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/mixed-age-learning.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler11(true)}
              >
                <span className="name">Mixed-Age Learning </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler12 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Spiritual Quotient (SQ): Nurturing the Soul at STEAM
                          Varsity
                        </h3>
                        <p>
                          At STEAM Varsity, we recognize the importance of the
                          whole person, including the spiritual dimension. Our
                          unique approach includes the development of "Spiritual
                          Quotient (SQ)," which goes beyond traditional
                          intelligence measures. We believe in fostering
                          qualities such as empathy, compassion, and
                          mindfulness, creating an environment where students
                          not only excel academically but also develop a deeper
                          understanding of themselves and others. Join us on a
                          transformative educational journey where the nurturing
                          of the soul is as integral as the development of the
                          mind.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/spiritual-quot.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler12(true)}
              >
                <span className="name">Spiritual Quotient (SQ) </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler13 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Love Quotient (LQ): Fostering Connection and Empathy
                          at STEAM Varsity
                        </h3>
                        <p>
                          At STEAM Varsity, we go beyond traditional metrics
                          with our commitment to cultivating the "Love Quotient
                          (LQ)." Our approach values the importance of empathy,
                          compassion, and understanding in the educational
                          journey. By embracing kindness, respect, and a sense
                          of community, we create an environment where students
                          not only thrive academically but also learn to connect
                          with others on a deeper, more compassionate level.
                          Join us in a learning community where the Love
                          Quotient is an integral part of personal and
                          collective growth.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/love-quot.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler13(true)}
              >
                <span className="name">Love Quotient (LQ) </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler14 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Emotional Quotient (EQ): Nurturing Emotional
                          Intelligence at STEAM Varsity
                        </h3>
                        <p>
                          At STEAM Varsity, we recognize the significance of
                          Emotional Quotient (EQ) in shaping well-rounded
                          individuals. Our approach extends beyond academic
                          excellence, focusing on the development of emotional
                          intelligence. We foster self-awareness, interpersonal
                          skills, and resilience, empowering students to
                          navigate the complexities of the modern world with
                          empathy and understanding. Join us in a learning
                          environment where Emotional Quotient is cherished as a
                          key element in the holistic growth of each student.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/emotional-quot.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler14(true)}
              >
                <span className="name"> Emotional Quotient (EQ) </span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
            <li className=" px-3 ">
              <div
                className={toggler15 ? "toggle-content open" : "toggle-content  "}
              >
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="text">
                        <h3>
                          Empathy Mapping: Understanding Perspectives at STEAM
                          Varsity
                        </h3>
                        <p>
                          Discover the power of "Empathy Mapping" at STEAM
                          Varsity, where we prioritize understanding and
                          connection. Through this innovative approach, students
                          develop a deep understanding of others' perspectives,
                          fostering a community built on compassion and
                          collaboration. By immersing ourselves in the
                          experiences and emotions of others, we cultivate not
                          only empathy but also effective communication and
                          problem-solving skills. Join us on a journey where
                          empathy mapping becomes a cornerstone for creating a
                          supportive and inclusive learning environment.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <div className="img-wrapper">
                        <img src="/images/pedagogies/empathy-mapping.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <span className="cancel-btn" onClick={() => cancelBtn()}>
                    <FaTimes />
                  </span>
                </div>
              </div>
              <p
                className="mb-0 d-flex justify-content-between align-items-center"
                onClick={() => setToggler15(true)}
              >
                <span className="name">Empathy Mapping</span>{" "}
                <span className="toggle-btn">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pedagogies;
