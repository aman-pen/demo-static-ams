import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading"> ABOUT </h1>
      <div className="one-day-event">
        A One Day Event Focusing On Azure, Microsoft 365, Sharepoint.
      </div>
      <div className="about-para-text">
        aMS (which stands for azure, Microsoft 365, SharePoint) is an
        international community of professionals working on the Microsoft
        Collaboration Platform. It’s a non-profit independent organization where
        members have the objective of sharing knowledge and experience about
        collaborative solutions, and usages. <br></br>
        <br></br>aOS (which was Azure, Office365, SharePoint) was created on
        January 1st, 2016 by a group of French-speaking professionals from
        France, Belgium, and Canada. It is expanding worldwide connecting with
        local enthusiasts loving to share the passion and organize community
        events.
      </div>
      <div className="registration-text">
        <a
          className="registration-button"
          href={HeaderData[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <p>Registrations are free !</p>
        </a>
      </div>
    </div>
  );
};
