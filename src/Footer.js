import React from "react";
import "./Footer.scss";
import footerData from "./content/Footerdata.json";
import footerLogo from "./images/website/aMS-Logo.webp";
import linkedInLogo from "./images/website/LinkedIn-white.png";
import FaceboolLogo from "./images/website/Facebook-white.png";
import TwitterLogo from "./images/website/twittericon.png";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="row footer-wrapper">
        <div className=" col-xs-12 col-lg-4 footer-logo-wrapper row">
          <img src={footerLogo} className="footerlogo" alt="aMS Logo" />
        </div>
        {/* <div className=" col-xs-12 col-lg-4 contact-us-wrapper">
          <h4 className="text-center">Contact Us</h4>
          <div>
            {footerData.map((data) => {
              return (
                <div className="text-center">
                  <p> Email: {data.email}</p>
                  <p> Mobile: {data.mobile}</p>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="col-xs-12 col-lg-4 social-media-wrapper">
          <h4 className="text-center">Social Media</h4>
          <div className="row ">
            {footerData.map((data) => {
              return (
                <React.Fragment key={data.email}>
                  <div className="col-10 col-xs-12 col-lg-12 media-array text-center">
                    <a
                      className="social-media-icon"
                      target="_blank"
                      href={data.linkedInLink}
                      rel="noreferrer"
                    >
                      <img src={linkedInLogo} alt="LinkedIn Logo" />
                    </a>
                    <a
                      className="social-media-icon"
                      target="_blank"
                      href={data.TwitterLink}
                      rel="noreferrer"
                    >
                      <img src={TwitterLogo} alt="twitter-logo" />
                    </a>
                    <a
                      className="social-media-icon"
                      target="_blank"
                      href={data.facebookLink}
                      rel="noreferrer"
                    >
                      <img src={FaceboolLogo} alt="facebook logo" />
                    </a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="col">
          <span>All Rights Reserved ©</span>
        </div>
      </div>
    </div>
  );
};
