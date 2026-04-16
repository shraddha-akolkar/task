import React from "react";
import "./MyJansavek.css";
import OrangePerson from "../../assets/svg/OrangePerson";
import BluePerson from "../../assets/svg/BluePerson";

import bluecard from "../../assets/images/blue-card.png";
import orangecard from "../../assets/images/orange-card.png";

const data = [
  {
    title: "Title 01",
    text: "Your journey through political engagement starts with a thorough assessment to understand your concerns and create the most effective strategy for you.",
    card: bluecard,
    icon: <BluePerson />,
  },
  {
    title: "Title 02",
    text: "During your political action, whether you're attending a rally or participating in a meeting, our team is here to ensure you feel informed, comfortable, and supported.",
    card: orangecard,
    icon: <OrangePerson />,
  },
  {
    title: "Title 03",
    text: "After your political involvement, we focus on helping you recover and regain your voice through a tailored engagement program.",
    card: bluecard,
    icon: <BluePerson />,
  },
  {
    title: "Title 04",
    text: "We want every participant to feel ready and at ease. Following a few steps before your engagement can help us provide the best support for you.",
    card: orangecard,
    icon: <OrangePerson />,
  },
  {
    title: "Title 05",
    text: "After your political involvement, we focus on helping you recover and regain your voice through a tailored engagement program.",
    card: bluecard,
    icon: <BluePerson />,
  },
];

const Why = () => {
  return (
    <div className="why-section section-space">
      <div className="container">
        <div className="why-heading text-center">
          <h2 className="heading">Why MyJansevak?</h2>
        </div>
        <div className="why-row">
          {" "}
          {data.map((item, index) => (
            <div key={index} >
              <div className="why-card-wrapper">
                <img src={item.card} alt="card" className="card-bg" />

                <div className="why-icon">{item.icon}</div>

                <div className="why-content text-center">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
