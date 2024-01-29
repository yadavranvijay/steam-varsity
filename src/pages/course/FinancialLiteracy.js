import React, { useEffect } from "react";
import CourseBanner from "../../components/CourseBanner";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
const FinancialLiteracy = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const bannerData = {
    image: "/images/course/finance-banner.jpg",
    heading: "Financial Literacy Course",
    para: "Welcome to the Financial Literacy course at STEAM Varsity, where we blend essential financial knowledge with practical skills to help you navigate the complex world of personal finance. This course is an essential part of our Science, Technology, Engineering, Arts, and Mathematics (STEAM) curriculum, designed to empower you with the understanding and tools you need to make informed financial decisions.",
  };
  return (
    <div className="page-content">
      <Helmet>
        <title>
          Financial Literacy Course | Empower Your Future with STEAM Varsity
        </title>
        <meta
          name="description"
          content="Take charge of your financial future with STEAM Varsity's Financial Literacy course. Learn essential skills in budgeting, investing, credit management, and more. Our interactive and practical approach helps you understand and apply key financial concepts. Start your journey to financial empowerment today"
        />
        <link rel="canonical" href="https://www.steamvarsity.com/course/financial-literacy/" />
      </Helmet>

      <CourseBanner {...bannerData} />

      <div className="bg2">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <h2>Course Overview</h2>

                <p>
                  Financial Literacy is not just about understanding money -
                  it's about creating a stable and prosperous future. This
                  course covers a wide range of topics, from the basics of
                  budgeting to the intricacies of investment, all tailored to
                  provide a comprehensive understanding of personal finance.
                </p>
                <h3>What You'll Learn:</h3>
                <p>
                  
                  <strong>Basics of Personal Finance: </strong>
                  Learn how to manage your money, including budgeting, saving,
                  and debt management.
                </p>
                <p>
                  <strong>Banking and Financial Services: </strong>
                  Understand different financial products and services, how they
                  work, and how to use them effectively.
                </p>
                <p>
                  <strong>Investments: </strong>
                  An introduction to various types of investments, the risk and
                  return associated with each, and how to build a diversified
                  portfolio.
                </p>
                <p>
                  <strong>Credit and Loans:</strong>
                  Learn about credit scores, how to build and maintain good
                  credit, and the ins and outs of loans.
                </p>

                <p>
                  <strong>Retirement and Estate Planning: </strong>
                  Plan for the future with an understanding of retirement
                  accounts, pensions, and estate planning basics.
                </p>

                <p>
                  <strong>Taxation: </strong>
                  Understand the basics of taxation, how it affects your income,
                  and strategies for efficient tax planning.
                </p>

                <p>
                  <strong>Financial Risk Management: </strong>
                  Learn how to protect yourself against financial risks and
                  unexpected life events.
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
              <h2>Hands-On Learning: </h2>
              <p>
                Engage in practical exercises, including creating a personal
                budget, simulating investment strategies, and analyzing case
                studies. These activities are designed to solidify your
                understanding and help you apply financial concepts to real-life
                scenarios.
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
                <h2>Who Should Enroll:</h2>
                <p>
                  This course is suitable for anyone looking to enhance their
                  financial literacy, from high school and college students to
                  adults seeking to manage their finances better. No prior
                  financial knowledge is required - just a willingness to learn
                  and take control of your financial future.
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
              <h2>Why Choose STEAM Varsity for Financial Literacy</h2>

              <p>
                At STEAM Varsity, we're committed to providing an education that
                empowers. Our Financial Literacy course is more than just
                lectures; it's an interactive, supportive environment where you
                can learn and grow. With expert instructors and a curriculum
                designed for real-world application, you'll leave this course
                with the knowledge and confidence to make sound financial
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracy;
