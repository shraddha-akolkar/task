import React, { useEffect, useState } from "react";
import "./Trust.css";

const stats = [
  { number: 1200, suffix: "+", label: "Affidavits Digitized and Analyzed." },
  { number: 50000, suffix: "+", label: "Pune Citizens checked their representative this month." },
  { number: 100, suffix: "%", label: "Data sourced from ECI & Govt Gazettes." },
  { number: 5000, suffix: "+", label: "Reports of Concern sent to local offices via this portal." }
];

const Trust = () => {
  return (
    <section className=" side-space container-fluid">
      <div className="trust-section " >

        <h2 className="trust-title heading text-center heading">
          Your trust isn’t assumed, its earned
        </h2>

        <div className="trust-flex ">
          {stats.map((item, index) => (
            <div className="trust-item" key={index}>
              <Counter number={item.number} suffix={item.suffix} />
              <p className="trust-text">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Counter = ({ number, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <h3 className="trust-number">
      {count.toLocaleString()}{suffix}
    </h3>
  );
};

export default Trust;