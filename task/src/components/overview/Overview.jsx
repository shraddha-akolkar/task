import React from "react";
import "./Overview.css";
import Search from "../../assets/svg/Search";

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="overview-main">
              <h2>
                MyJansevak - Empowering those{" "}
                <br className="d-none d-md-block" />
                building the future.
              </h2>

              <p>
                We offer bespoke platform to enhance, harness the true potential
                in our citizens and leaders.
              </p>

              <div className="search-box">
                <span className="search-icon">
                  <Search />
                </span>

                <input
                  type="text"
                  placeholder="Search corporator, MLA, MP etc..."
                />

                <button className="overview-button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
