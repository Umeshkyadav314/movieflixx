/* eslint-disable no-unused-vars */
import { Fragment, useState, useEffect } from "react";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setYear(new Date().getFullYear());
    setDate(new Date().toLocaleDateString());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="m-5 time  bg-white">
          {/* ... other code ... */}
          <p>{`© ${year} . All Rights Reserved.`}</p>
          <p>{time.toLocaleString()}</p>
        </div>

        <div className="socialIcons">
          <a href="https://github.com/Umeshkyadav314">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/umesh-kumar-yadav-31372a1b0/">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a href="https://www.instagram.com/umeshkyadav314/">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://x.com/UmeshYadav14715/status/1694335431129940264?t=q-ftVwL_2Bnul6Za-lYZGw&s=03">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
