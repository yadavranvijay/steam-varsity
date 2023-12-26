import React ,{useEffect} from 'react'
import CourseBanner from '../../components/CourseBanner'
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
const Programming = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
    const bannerData = {
       
        image: "/images/course/c.jpg",
        heading: "Programming & Coding",
        para: "Welcome to our Programming & Coding course, a core component of Steam Varsity's STEAM education offerings. This course is designed to turn you from a technology consumer into a technology creator, equipping you with the skills to bring your digital ideas to life.",
      };
      return (
        <div className="page-content">
        <Helmet>
        <title>Programming & Coding Course at Steam Varsity</title>
        <meta name="description" content="Embark on a journey of logical thinking and problem-solving with our Programming & Coding Course at Steam Varsity. Gain proficiency in coding languages, understand algorithmic structures, and cultivate the skills to bring ideas to life through software development. Join us in mastering the language of innovation." />
        <link rel="canonical" href="https://www.steamvarsity.com/course/programming" />
        
        
        </Helmet>
        <CourseBanner {...bannerData}/>
    
        
        <div className="bg2">
       <div className="container py-5">
        <div className="row">
        <div className="col">
        <div className="wrapper">
        <h2>Course Description</h2>
    
    
        <p>This Programming & Coding course is an extensive foray into the languages and methodologies that power the digital world. Starting with the basics, you'll learn about different programming paradigms and the logic behind coding. The course covers a variety of languages, including but not limited to Python, JavaScript, and HTML/CSS, each selected for its relevance and applicability in different areas of technology. You'll delve into algorithms, data structures, and the principles of clean, efficient code. Real-world applications and problem-solving exercises are central to the curriculum, encouraging you to think critically and creatively. The course also explores software development tools and best practices, ensuring you're well-equipped for future learning or professional pursuits. By the end, you'll have completed several projects that demonstrate your coding skills and understanding.
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
        <h2>What You'll Learn </h2>
        
       
        
        
        
    
        <p> <strong>Programming Basics:</strong>   Understand the core principles of writing code, including syntax, control structures, and data types.</p>
        <p><strong>Problem-Solving:</strong>   Develop critical thinking and problem-solving skills that are essential for programming.</p>
         <p><strong>Web Development:</strong>  Learn how to create websites using HTML, CSS, and JavaScript.</p>
         <p><strong>Software Development:</strong>  Get an introduction to software development with Python or another high-level language.</p>
         <p><strong>Project Work:</strong>  Apply your skills in substantial projects that showcase your ability to create and innovate.</p>
         
         
        
    
        </div>
        
        </div>
        </div>
        </div>
    
    <div className="bg2">
        <div className="container py-5">
        <div className="row">
        <div className="col">
        <div className="wrapper">
        <h2>Course Features :</h2>
    
    
        <p> <strong>Interactive Lessons:  </strong>  Engaging content that explains the theory and practice of Design Thinking.</p>
        <p><strong>Real-World Projects: </strong>  Apply what you've learned to actual problems and design challenges.</p>
         <p><strong>Expert Instructors: </strong> Learn from experienced professionals who are leaders in the field of design</p>
         <p><strong>Peer Collaboration:</strong>  Join a community of learners to share ideas, feedback, and support.</p>
         <p><strong>Flexible Learning:</strong>  Access the course anytime, anywhere, at your own pace.</p>
         
    
         <h3>Who Should Enroll:</h3>
         <p>This course is ideal for students, educators, professionals, or anyone with a curiosity about how digital technology works and a desire to create their own applications. Whether you're a complete beginner or have some experience, this course will provide valuable skills and knowledge.
    
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
        <h2>Why Choose Us for Programming & Coding:</h2>
    
    
        <p>Steam Varsity is more than just a learning platform; it's a gateway to the future of technology. Our Programming & Coding course is meticulously crafted to cater to both beginners and those looking to enhance their skills. We provide a supportive learning environment, robust community engagement, and direct access to industry professionals, ensuring a comprehensive education that's both enjoyable and effective.
        </p>
    
        
        </div>
        
        </div>
        </div>
        </div>
      </div>
      )
}

export default Programming