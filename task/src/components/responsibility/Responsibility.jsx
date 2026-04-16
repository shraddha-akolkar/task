import React from "react";
import "./Responsibility.css";

import img from "../../assets/images/earth.png";

const Responsibility = () => {
  return (
    <div className="section-space resp-main">
      <div className=" responsibility-section row ">
        <h2 className="heading resp-header mobile-heading">
          Our Nation, Our Responsibility
        </h2>

        <div className="left-section col-md-8">
          <h2 className="heading resp-header desktop-heading">
            Our Nation, Our Responsibility
          </h2>
          <p className="para">
            Integer at tincidunt dui, in tristique mauris. Suspendisse potenti.
            Vestibulum aliquam enim nec pretium pulvinar. Sed non sagittis enim,
            quis convallis ligula. Maecenas eleifend bibendum mollis. Integer
            pretium ligula ut rutrum vulputate. Donec sollicitudin feugiat
            dolor, et sollicitudin ligula scelerisque vel. Sed pellentesque dui
            ac diam tristique, in hendrerit ex hendrerit.
          </p>
          <p className="para">
            Praesent in hendrerit purus, quis imperdiet neque. Donec felis
            dolor, hendrerit condimentum mauris eget, consectetur consequat
            ante. Maecenas ut eros dapibus, ullamcorper erat sit amet, molestie
            tellus. Vivamus libero lectus, lobortis non quam a, consectetur
            condimentum arcu. Curabitur eget commodo lacus, id placerat
            arcu.{" "}
          </p>
        </div>

        <div className="right-section col-md-4">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Responsibility;