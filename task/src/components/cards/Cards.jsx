import React from "react";
import "./Cards.css";
import Arrow from "../../assets/svg/Arrow";

const data = [
  { number: 350, label: "Panchayat Samiti", color: "orange" },
  { number: 34, label: "Zilla Parishad", color: "blue" },
  { number: 29, label: "Municipal Corporation", color: "orange" },
  { number: 288, label: "Vidhansabha", color: "blue" },
  { number: 78, label: "Vidhan Parishad", color: "orange" },
  { number: 543, label: "Loksabha", color: "blue" },
  { number: 245, label: "Rajyasabha", color: "orange" },
];

const Cards = () => {
  return (
    <div className="cards-main">
      <div className="container-fluid ">
        <div className="cards-row">
          {data.map((item, index) => (
            <div key={index}>
              <div className={`stat-card ${item.color}`}>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
