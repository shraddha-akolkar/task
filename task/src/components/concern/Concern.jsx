import React from "react";
import "./Concern.css";

const Concern = () => {
  return (
    <section className="Concern-section section-space">
      <div className="container-fluid ">
        <div className="Concern-grid  ">
          
          <div className="Concern-card orange">
            <div className="Concern-content">
              <h2 className="">Raise an Concern</h2>
              <p>
                Over 5,000 concerns have been reported to local authorities.
              </p>
            </div>
            <button className="Concern-btn">Raise a Complaint</button>
          </div>

          <div className="Concern-card blue">
            <div className="Concern-content">
              <h2>Are You a Leader?</h2>
              <p>Become a part of our MyJansevak!</p>
            </div>
            <button className="Concern-btn">Join Us</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concern;