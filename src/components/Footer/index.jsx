import React from "react";

import { Link } from "react-router-dom";

//Styles
import "./styles.scss";
import { Select, Tooltip } from "antd";

//Icon
import locationIcon from "../../assets/icons/location-icon.png";
import mailIcon from "../../assets/icons/mail-icon.png";
import phoneIcon from "../../assets/icons/phone-icon.png";

// Components
import Logo from "../Logo";

const { Option } = Select;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col footer-col-3">
            <Logo />
          </div>
          <div className="footer-col footer-col-1">
            <div className="footer__wrap">
              <h2>Home</h2>
              <ul>
                <li>
                  <Link to="our-story">Story</Link>
                </li>
                <li>
                  <Link to="menu">Menu</Link>
                </li>
                <li>
                  <Link to="contacts">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col footer-col-2">
            <div className="footer__wrap">
              <h2>Get In Touch</h2>
              <ul>
                <li>
                  <img src={locationIcon} alt="" />
                  <span>123 TripleN</span>
                </li>
                <li>
                  <img src={phoneIcon} alt="" />
                  <span>+84234567891</span>
                </li>
                <li>
                  <Tooltip title="phongoc@food.com.vn">
                    <img src={mailIcon} alt="" />
                    <span>phongoc@food.com.vn</span>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col footer-col-2">
            <div className="footer__wrap">
              <h2>Working hours</h2>
              <ul>
                <li>
                  <span>Mon - Fri: 9:00 - 21:00</span>
                </li>
                <li>
                  <span>Sat: 8:30 - 20:00</span>
                </li>
                <li>
                  <span>Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col footer-col-4">
            <div className="footer__wrap">
              <h2>Subcribe to our newsletter</h2>
              <span>For product announcements and exclusive insights</span>

              <div className="footer__wrap--input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Input your email" />
                <button>Subcribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__foot">
          <div className="footer__foot--select">
            <Select
              defaultValue="english"
              suffixIcon={<i className="fa-solid fa-angle-down"></i>}
            >
              <Option value="english">English</Option>
              <Option value="vn" disabled>
                Tiếng Việt
              </Option>
            </Select>
          </div>
          <div className="footer__foot--wrapper">
            <p>©2022 Brand, Inc.</p>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer__foot--icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
