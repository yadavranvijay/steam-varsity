


import { useState, useRef } from 'react';

const ServiceVideo = ({path }) => {


    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState();
    
    
 
    const handlePlayPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      
    };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 Bold">Our  Service</h2>
          </div>
          <div className="col-md-12">
            <div className="wrapper video-wrapper  position-relative" onClick={handlePlayPause}>
             <video ref={videoRef}   controls={true}>
        <source src={path} type="video/mp4" />
       
      </video>
              <div className={isPlaying ? 'play d-none' : 'play'} onClick={() =>setIsPlaying(true)}>
                <img src="/images/about/play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceVideo