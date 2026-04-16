import React, { useRef } from "react";
import "./News.css";
// import img from "../../assets/images/youutube.png";
import play from "../../assets/images/play.png";
import Arrow from "../../assets/svg/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
const slides = [
  {
    video: video1,
  },
  {
    video: video2,
  },
  {
    video: video1,
  },
  {
    video: video2,
  },
];

const NewsData = [
  {
    label: "25 March 2026",
    des: "Distribution of technology-based assistive devices for the disabled under CSR in collaboration with Pune Municipal Corporation",
  },
  {
    label: "14 April 2026",
    des: "Organization of free health check-up camps in rural areas to promote community well-being.",
  },
  {
    label: "30 May 2026",
    des: "Launch of environmental awareness workshops in schools to encourage sustainable practices.",
  },
  {
    label: "10 June 2026",
    des: "Implementation of skill development programs for underprivileged youth in partnership with local NGOs.",
  },
];

const News = () => {
    const videoRefs = useRef([]);

  return (
    <div className="section-space">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-7">
            <h4 className="section-title">News / Press Release</h4>

            <div className="news-list">
              {NewsData.map((item, index) => (
                <div key={index} className="news-card">
                  <span className="news-date">{item.label}</span>
                  <p className="news-text">{item.des}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <h4 className="section-title">Spotlight</h4>

      


    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="spotlight-swiper"

      onSlideChange={(swiper) => {
        // Pause all videos
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });

        // Play active slide video
        const activeVideo = videoRefs.current[swiper.realIndex];
        if (activeVideo) {
          activeVideo.play();
        }
      }}

      onSwiper={(swiper) => {
        // Auto play first video on load
        setTimeout(() => {
          const firstVideo = videoRefs.current[swiper.realIndex];
          if (firstVideo) firstVideo.play();
        }, 300);
      }}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="spotlight-card">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.video}
              className="spotlight-img"
              muted
              loop
              playsInline
            />

            {/* Optional Play Button */}
            <div
              className="play-btn"
              onClick={() => videoRefs.current[index]?.play()}
            >
              <img src={play} alt="play" />
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="custom-prev">
        <Arrow />
      </div>
      <div className="custom-next">
        <Arrow />
      </div>
    </Swiper>
 

          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
