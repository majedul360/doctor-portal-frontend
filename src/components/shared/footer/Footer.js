import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-2 md:px-4 lg:px-20 py-20 ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deeply Checkup</a>
        </div>
        <div>
          <span className="footer-title">Our Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath whitening </a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">Bangladesh, chatmohar, pabna.</a>
        </div>
      </footer>
      <p className="text-center capitalize">&copy;2022 | all rights reserved</p>
    </div>
  );
};

export default Footer;
