import React, { useState } from "react";
import "./Header.scss";
import Sponsors from "./content/SponsorData.json";
import Speakers from "./content/SpeakersData.json";
import Sessions from "./content/Sessions.json";
import NavbarData from "./content/NavbarData.json";
import HeaderData from "./content/HeaderData.json";
// import bgImg from "./images/website/bg-img.png";
import logo from "./images/website/aMS-Logo.webp";
import twitterLogo from "./images/website/twittericon.png";
import { Navbar, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import {
  // isDesktop,
  isMobile,
} from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import hamburgerclose from "./images/website/close.png";

export const Header = () => {
  const [HamburgerOpen, setHamburgerOpen] = useState({ menuOpen: false });
  const handleHambugerMenuStateChange = (state) => {
    setHamburgerOpen({ menuOpen: state.isOpen });
  };
  const closeHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: false });
  };
  const toggleHamburgerMenu = () => {
    setHamburgerOpen({ menuOpen: !HamburgerOpen.menuOpen });
  };
  return (
    <div className="header" id="header">
      <Row className="head-nav">
        <Col
          xs={3}
          className="d-flex align-items-center justify-content-center"
        >
          <img src={logo} alt="ICSS-logo" className="nav-bar-logo" />
        </Col>
        {isMobile ? (
          <>
            <Col xs={6}> </Col>
            <Col>
              <Menu
                isOpen={HamburgerOpen.menuOpen}
                onStateChange={(state) => handleHambugerMenuStateChange(state)}
                right
                width={"100%"}
                customCrossIcon={
                  <img
                    src={hamburgerclose}
                    onClick={toggleHamburgerMenu}
                    alt="hamburger-menu"
                  />
                }
              >
                {NavbarData.map((data) => {
                  return (
                    <a
                      className="menu-item"
                      href={data.url}
                      onClick={() => closeHamburgerMenu()}
                    >
                      <span>{data.title}</span>
                    </a>
                  );
                })}
              </Menu>
            </Col>
          </>
        ) : (
          <Col xs={9} className="nav-items">
            <Navbar>
              <Nav navbar>
                {NavbarData.map((data) => {
                  return (
                    <NavItem>
                      <NavLink href={encodeURI(data.url)}>
                        {" "}
                        {data.title}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Navbar>
          </Col>
        )}
      </Row>
      <Row className="head-data">
        {HeaderData.map((data) => {
          return (
            <>
              <Col md={12} xl={6} className=" content-left row">
                <Row className="siteTitle">
                  <Col>
                    <span>{data.presentedUserGroup}</span>
                    <h1>{data.siteTitle}</h1>
                  </Col>
                </Row>
                <Row className="subTitle">
                  <Col>
                    <span>{data.subTitle}</span>
                  </Col>
                </Row>
                <Row className="registrationBtn">
                  <Col>
                    <button className="register-btn">
                      <a
                        href={data.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {data.registrationBtn}
                      </a>
                    </button>
                  </Col>
                </Row>
              </Col>
              <Col md={12} xl={6} className="row content-right">
                <Row className="handles col-7">
                  <Col>
                    <a
                      href={
                        "https://twitter.com/search?q=" +
                        encodeURIComponent(data.twitterHashTag)
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="Twitter logo" src={twitterLogo} />
                      <span className="twitterHashTag">
                        {data.twitterHashTag}
                      </span>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href={"https://twitter.com/" + data.twitterHandle}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="Twitter logo" src={twitterLogo} />
                      <span className="twitterHandle">
                        {data.twitterHandle}
                      </span>
                    </a>
                  </Col>
                </Row>
                <Row className="eventDate">
                  <Col md={5} className="eventData-border">
                    <span>{data.eventDate}</span>
                  </Col>
                </Row>
                <Row className="fields">
                  <Col>
                    <span className="eventTitle">{data.eventTitle}</span>
                    <Row className="fields-row">
                      <Col className="sessionNumber">
                        <span>{Speakers.length}</span>
                        <span>SPEAKERS</span>
                      </Col>
                      <Col className="trackNumber">
                        <span>{Sessions.length}</span>
                        <span>SESSIONS</span>
                      </Col>
                      <Col className="sponserNumber">
                        <span>{Sponsors.length}</span>
                        <span>SPONSORS</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
