import React, { useState, useEffect } from "react";
import Arrow from "../../assets/svg/Arrow";
import Doublequotes from "../../assets/svg/Doublequotes";
import "./Slider.css";

const testimonials = [
  {
    text: "Nam egestas sem vitae pulvinar venenatis. Fusce faucibus ultricies odio, ut molestie nibh semper quis. Vestibulum quam est, vehicula ac fermentum ut, vulputate id ipsum. Nam enim lacus, rutrum eget nulla ac, facilisis imperdiet elit.",
    name: "Ramesh Jadhav",
    area: "Kharadi",
    title: "Mr. Bansode Shailjeet Jaywant",

    link: "04A - Kharadi - Wagholi",
  },
  {
    text: "Curabitur sodales nisl a velit efficitur, vel egestas elit fermentum. Maecenas in lacus vitae sem cursus convallis. Proin efficitur, justo at convallis dapibus, enim nulla placerat risus, id blandit mauris eros ut nunc.",
    name: "Anita Deshmukh",
    area: "Viman Nagar",
    title: "Dr. Patil Arjun Sudhir",
    link: "04A - Kharadi - Wagholi",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vestibulum convallis orci, nec consectetur sapien placerat at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Siddharth Kulkarni",
    area: "Baner",
    title: "Ms. More Snehal Ashok",

    link: "07C - Baner - Balewadi",
  },
  {
    text: "Nam egestas sem vitae pulvinar venenatis. Fusce faucibus ultricies odio, ut molestie nibh semper quis. Vestibulum quam est, vehicula ac fermentum ut, vulputate id ipsum. Nam enim lacus, rutrum eget nulla ac, facilisis imperdiet elit.",
    name: "Rahul Patil",
    area: "Hinjewadi",
    title: "Mr. Bansode Shailjeet Jaywant",

    link: "09D - Hinjewadi Phase 2",
  },
  {
    text: "Curabitur sodales nisl a velit efficitur, vel egestas elit fermentum. Maecenas in lacus vitae sem cursus convallis. Proin efficitur, justo at convallis dapibus, enim nulla placerat risus, id blandit mauris eros ut nunc.",
    name: "Anita Deshmukh",
    area: "Viman Nagar",
    title: "Dr. Patil Arjun Sudhir",
    link: "04A - Kharadi - Wagholi",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vestibulum convallis orci, nec consectetur sapien placerat at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Siddharth Kulkarni",
    area: "Baner",
    title: "Ms. More Snehal Ashok",

    link: "07C - Baner - Balewadi",
  },
];

const Slider = () => {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [index, setIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setItemsPerView(1);
      else if (window.innerWidth <= 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extended = [
    ...testimonials.slice(-itemsPerView),
    ...testimonials,
    ...testimonials.slice(0, itemsPerView),
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === extended.length - itemsPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(itemsPerView);
      }, 400);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(testimonials.length);
      }, 400);
    }
  }, [index, itemsPerView, extended.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < -50) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="section-space">
      <div className="container-fluid">
        <h2 className="slider-title text-center heading">
          What do people think about their leaders?
        </h2>

        <div className="slider-wrapper">
          <button className="arrow-btn left" onClick={prev}>
            <Arrow />
          </button>

          <div
            className="slider-track-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${index * (100 / itemsPerView)}%)`,
                transition: isTransitioning ? "0.4s ease" : "none",
              }}
            >
              {extended.map((item, i) => (
                <div
                  className="slider-item"
                  key={i}
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                >
                  <div className="testimonial-card">
                    <div className="quote">
                      <Doublequotes />
                    </div>

                    <p className="text">{item.text}</p>

                    <div className="user-info para">
                      <div className="user-left">
                        <h6>{item.name}</h6>
                        <span >{item.area}</span>
                      </div>

                      <div className="user-right">
                        <p className="title">{item.title}</p>
                        <p className="link">{item.link}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow-btn right" onClick={next}>
            <Arrow />
          </button>
        </div>

        <div className="dots text-center">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${
                i ===
                (index - itemsPerView + testimonials.length) %
                  testimonials.length
                  ? "active"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
