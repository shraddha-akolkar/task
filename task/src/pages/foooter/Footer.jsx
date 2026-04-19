import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Duis efficitur leo congue est malesuada, et tempus enim tempus. Vestibulum maximus sodales neque id vulputate. Praesent vitae aliquam velit. Sed mauris eros, congue ac efficitur nec, pellentesque ac massa. Morbi eleifend augue sem, sit amet tincidunt enim viverra sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos velit...`;

  const fullText = `Duis efficitur leo congue est malesuada, et tempus enim tempus.
  Vestibulum maximus sodales neque id vulputate. Praesent vitae aliquam velit.
 Praesent in hendrerit purus, quis imperdiet neque. Donec felis dolor, hendrerit condimentum mauris eget, consectetur consequat ante. Maecenas ut eros dapibus, ullamcorper erat sit amet, molestie tellus. Vivamus libero lectus, lobortis non quam a, consectetur condimentum arcu. Curabitur eget commodo lacus, id placerat arcu. ...`;

  return (
    <footer className="side-space  footer">
      <div className="container-fluid footer-container">
        <h2 className="footer-title heading">MyJansevak</h2>

        <p className="footer-desc para">
          {expanded ? fullText : shortText}
          <span className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? " Read Less" : " Read More"}
          </span>
        </p>

        <div className="newsletter d-flex justify-content-between align-items-center flex-wrap">
          <div className="newsletter-text">
            <h3>Newsletter</h3>
            <p>Be the first one to know latest news and updates</p>
          </div>

          <div className="newsletter-input position-relative">
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
              <li>In Press</li>
            </ul>
          </div>

          <div>
            <h4>Important Links</h4>
            <ul>
              <li>Gram Panchayat</li>
              <li>Zilla Parishad</li>
              <li>Panchayat Samiti</li>
              <li>Vidhan Sabha</li>
              <li>Loksabha</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Jobs</li>
              <li>In Press</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Online Chat</li>
              <li>Whatsapp</li>
              <li>Telegram</li>
              <li>Ticketing</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            ©MyJansevak, 2026 All rights reserved. Powered by{" "}
            <a href="https://www.hatsoffdigital.com/"><span>Hats-Off</span></a>
          </p>
          <p className="bottom-right">
            Privacy policy <span className="">|</span> Terms of use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
