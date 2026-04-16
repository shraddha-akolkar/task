import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import Arrow from "../../assets/svg/Arrow";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Pune");

  const cities = ["Pune", "Mumbai", "Bangalore", "Delhi"];

  return (
    <nav className="nav-main side-space">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="d-flex align-items-center gap-3 position-relative">
          <div
            className="location d-flex align-items-center"
            onClick={() => setOpen(!open)}
          >
            {city}
            <span className="ms-1 dropdown-arrow">
              <Arrow />
            </span>
          </div>

          {open && (
            <div className="dropdown-menu-custom">
              {cities.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-item-custom"
                  onClick={() => {
                    setCity(item);
                    setOpen(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          <button className="btn complaint-btn">Raise A Complaint</button>
          <button className="btn login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
