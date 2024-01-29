import React ,{useEffect} from 'react'
import CourseBanner from '../components/CourseBanner'
import LatestNews from "../components/LatestNews";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
const Events = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const bannerData = {
    image: "/images/career.jpg",
    heading: "A Journey Through STEAM Education Events",
    para: "Embark on an enriching adventure with our array of STEAM (Science, Technology, Engineering, Arts, and Mathematics) education events, designed to ignite curiosity and foster innovation.",
  };
  return (
    <div className="page-content">
 <Helmet>
        <title> STEAM Varsity events</title>
        <meta name="description" content="Immerse yourself in the realm of creativity with our 3D Prototyping & CAD Course at STEAM Varsity. Learn the art of transforming concepts into reality, exploring the synergy between 3D prototyping and Computer-Aided Design. Elevate your skills and bring your ideas to life in the digital landscape." />
        <link rel="canonical" href="https://www.steamvarsity.com/events/" />
        
        
        </Helmet>

      <CourseBanner {...bannerData} />
      <section>
        <div className="container py-5">
          <h2 className="fw-bold mb-5">Upcoming Events</h2>

          <LatestNews path="/images/services/latest.jpg" />
        </div>
      </section>


      </div>
  )
}

export default Events