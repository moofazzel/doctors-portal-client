import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ background:`url(${footer})  center`, backgroundSize: "cover",backgroundRepeat: "no-repeat" }}
    >
      <div className="footer p-10 ">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="text-center my-16">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
