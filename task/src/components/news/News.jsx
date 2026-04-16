import React, { useRef, useState } from "react";
import "./News.css";
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
  { video: video1 },
  { video: video2 },
  { video: video1 },
  { video: video2 },
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
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="section-space">
      <div className="container-fluid">
        <div className="row g-4">

          <div className="col-lg-7">
            <h4 className="heading">News / Press Release</h4>

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
            <h4 className="heading ">Spotlight</h4>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="spotlight-swiper"

              onSlideChange={() => {
                videoRefs.current.forEach((video) => {
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                });
                setPlayingIndex(null);
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
                      playsInline
                      controls={playingIndex === index}
                    />

                    {playingIndex !== index && (
                      <div
                        className="play-btn"
                        onClick={() => {
                          const video = videoRefs.current[index];
                          if (video) {
                            video.play();
                            setPlayingIndex(index);
                          }
                        }}
                      >
                        <img src={play} alt="play" />
                      </div>
                    )}
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