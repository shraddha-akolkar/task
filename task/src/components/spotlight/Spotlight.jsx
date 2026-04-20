import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Spotlight.css";

import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";
import person4 from "../../assets/images/person4.png";

import Star from "../../assets/svg/Star";
import Verified from "../../assets/svg/Verified";

const data = [
  {
    img: person3,
    name: "Mr. Ravi Ramesh Tingre",
    rating: "4.8",
    ward: "02B - Phulenagar - Nagpur Chawl",
    party: "Nationalist Congress Party",
    year: "2026 (2nd term Corporator)",
    active: true,
  },
  {
    img: person4,
    name: "Mr. Shreyas Pritam Khandve",
    rating: "4.4",
    ward: "03A - Viman nagar - Lohgaon",
    party: "Bharatiya Janata Party",
    year: "2026 (1st term Corporator)",
    active: true,
  },
  {
    img: person2,
    name: "Mr. Bansode Shailjeet Jaywant",
    rating: "4.7",
    ward: "04A - Kharadi - Wagholi",
    party: "Bharatiya Janata Party",
    year: "2026 (3rd term Corporator)",
    active: false,
  },
  {
    img: person1,
    name: "Mrs. Anjali Vinodanna Orse",
    rating: "4.2",
    ward: "07B - Gokhale nagar - Wakadewadi",
    party: "Nationalist Congress Party",
    year: "2026 (1st term Corporator)",
    active: false,
  },
   {
    img: person2,
    name: "Mr. Ravi Ramesh Tingre",
    rating: "4.8",
    ward: "02B - Phulenagar - Nagpur Chawl",
    party: "Nationalist Congress Party",
    year: "2026 (2nd term Corporator)",
    active: true,
  },
  {
    img: person1,
    name: "Mrs. Anjali Vinodanna Orse",
    rating: "4.2",
    ward: "07B - Gokhale nagar - Wakadewadi",
    party: "Nationalist Congress Party",
    year: "2026 (1st term Corporator)",
    active: false,
  },
  {
    img: person4,
    name: "Mr. Bansode Shailjeet Jaywant",
    rating: "4.7",
    ward: "04A - Kharadi - Wagholi",
    party: "Bharatiya Janata Party",
    year: "2026 (3rd term Corporator)",
    active: false,
  },
  {
    img: person3,
    name: "Mr. Shreyas Pritam Khandve",
    rating: "4.4",
    ward: "03A - Viman nagar - Lohgaon",
    party: "Bharatiya Janata Party",
    year: "2026 (1st term Corporator)",
    active: true,
  },
];

const Spotlight = () => {
  const [activeTab, setActiveTab] = useState("Municipal Corporation");

  const tabs = [
    "Municipal Corporation",
    "Zilha Parishad",
    "Panchayat Samiti",
    "Vidhansabha",
    "Loksabha",
  ];
  return (
    <div>
      <div className="container-fluid spotlight-section">
       <div className="d-flex justify-content-between align-items-center flex-wrap 
       ">
  <h2 className="heading spotlight-title">Leaders in Spotlight</h2>

  <ul className="nav spotlight-tabs desktop-tabs">
    {tabs.map((tab) => (
      <li
        key={tab}
        className={`nav-item ${activeTab === tab ? "active" : ""}`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </li>
    ))}
  </ul>

  <select
    className="mobile-dropdown"
    value={activeTab}
    onChange={(e) => setActiveTab(e.target.value)}
  >
    {tabs.map((tab) => (
      <option key={tab} value={tab}>
        {tab}
      </option>
    ))}
  </select>
</div>
        <div className="row g-3 spotlight-slider">
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="leader-card">
                <div className="leader-img">
                  <img src={item.img} alt="" />
                  <span className="verified">
                    <Verified />
                  </span>
                </div>

                <div className="leader-body">
                  <div className="d-flex justify-content-between align-items-center leader-info">
                    <h6>{item.name}</h6>
                    <span className="rating">
                      {item.rating}
                      <Star />
                    </span>
                  </div>

                  <p className="party">
                    <span>Ward:</span>
                    <span className="info"> {item.ward}</span>
                  </p>
                  <p className="party">
                    <span>Political Party: </span>
                    <span className="info"> {item.party}</span>
                  </p>
                  <p className="party">
                    <span>Election Year: </span>
                    <span className="info"> {item.year}</span>
                  </p>

                  <button className="btn profile-btn outline">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;