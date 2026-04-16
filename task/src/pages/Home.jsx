import React from "react";
import "./Home.css";

import Concern from "../components/concern/Concern";
import Overview from "../components/overview/Overview";
import Cards from "../components/cards/Cards";
import Spotlight from "../components/spotlight/Spotlight";
import Responsibility from "../components/responsibility/Responsibility";
import Trust from "../components/trust/Trust";
import MyJansavek from "../components/myjansavek/MyJansavek";
import Slider from "../components/slider/Slider";
import News from "../components/news/News";
import Navbar from "./header/Navbar";
const Home = () => {
  const horizontalSectionPadding = "var(--side-space)";

  return (
    <div>
      <Navbar />
      <Overview />
      <div
        className="home-sections"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          marginTop: "50px",
          marginBottom: "50px",
          paddingLeft: horizontalSectionPadding,
          paddingRight: horizontalSectionPadding,
        }}
      >
        <Cards />

        <Spotlight />

        <Responsibility />

        <Trust />

        <MyJansavek />

        <Slider />

        <News />

        <Concern />
      </div>
    </div>
  );
};

export default Home;
