import React from "react";
import "./Sponsor.scss";
// import SponsorData from "./content/SponsorData.json";

export const Sponsor = () => {
  return (
    <div className="sponsor p-md-5 p-3" id="sponsors">
      <h1 className="sponsor-heading my-5 text-center">SPONSORS</h1>
      <div className="row sponsor-wrapper text-center">
        <div className=" col-xs-12 col-md-6 col-lg-4 sponsor-card">
          <a
            href="https://www.abalon.fr/"
            target="_blank"
            rel="noreferrer"
            className="sponsor-border"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="sponsor-img"
              alt="Abalon"
              src="./images/website/ABALON.webp"
            />
          </a>
        </div>
        <div className=" col-xs-12 col-md-6 col-lg-4 sponsor-card">
          <a
            href="https://hifilibrary.com/"
            target="_blank"
            rel="noreferrer"
            className="sponsor-border"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "5%",
            }}
          >
            <img
              className="sponsor-img"
              alt="HiFi Library"
              src="./images/website/hifiLibrary.webp"
              style={{ width: "86%", height: "150px" }}
            />
          </a>
        </div>
        <div className=" col-xs-12 col-md-6 col-lg-4 sponsor-card">
          <a
            href="https://www.penthara.com"
            target="_blank"
            rel="noreferrer"
            className="sponsor-border"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="sponsor-img"
              alt="Penthara Technologies"
              src="./images/website/PentharaLogo.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
