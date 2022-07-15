import React, { useState, useEffect } from "react";
import "./Speaker.scss";
// import SpeakersData from "./content/SpeakersData.json";
import ModalSpeaker from "./ModalSpeaker";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";
import Twitterlogo from "./images/website/twitterblue.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { ApiSpeaker } from "../src/services/Api";

export const Speaker = () => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };

  const [speaker, setSpeaker] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSpeaker().then((item) => {
      if (mounted) {
        setSpeaker(item);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <div className="speakers" id="speakers">
        <h1 className="speaker-heading text-center">Speakers</h1>
        <div className="row justify-content-center">
          {/* {console.log(speaker[0])} */}
          {speaker.map((data) => {
            // console.log(data);
            return (
              <>
                {data.isTopSpeaker === true && (
                  <div
                    className="col-xs-12 col-md-6 speaker-card-wrapper col-xl-4"
                    key={data.id}
                  >
                    <Card className="speaker-card shadow nopadding">
                      <div className="speaker-image">
                        <div id="cube">
                          <div class="square-holder">
                            <div class="square" id="square"></div>
                          </div>
                        </div>
                        <LazyLoad height={400} debounce={false}>
                          <ImageLoader
                            onClick={() => toggle(data)}
                            src={data.profilePicture}
                            // alt={data.speakerAltText}
                          />
                        </LazyLoad>
                      </div>
                      <div
                        className="card-title-wrapper"
                        onClick={() => toggle(data)}
                      >
                        <CardTitle tag="h3" className="text-center ">
                          {data.fullName}
                        </CardTitle>
                      </div>
                      <CardBody>
                        <div className="cursor-click">
                          <CardSubtitle
                            onClick={() => toggle(data)}
                            tag="p"
                            className="mb-2 text-start nopadding col"
                          >
                            {data.tagLine}
                          </CardSubtitle>
                          <CardText onClick={() => toggle(data)}>
                            {/* {data.speakerSubTitle}sessions.name */}
                          </CardText>
                        </div>
                        <div style={{ marginRight: "15px" }}>
                          {data.MVPstatus === "true" ? (
                            <div style={{ marginRight: "15px" }}>
                              <img
                                src={MVPlogo}
                                alt="MVP"
                                className="card-socialmedia nopadding align-self-start cursor-none"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data.MicrosoftEmployee === "true" ? (
                            <div style={{ marginRight: "15px" }}>
                              <img
                                src={Microsoftlogo}
                                alt="Microsoft Employee"
                                className="card-socialmedia nopadding align-self-start"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {/* {console.log(data.links[1].url)} */}
                          {data.links[1] != null ? (
                            <a
                              href={data.links[1].url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ marginRight: "15px" }}
                            >
                              <img
                                src={LinkedInlogo}
                                alt="LinkedIn logo"
                                className="card-socialmedia nopadding align-self-start"
                              />
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.links[0] != null ? (
                            <a
                              href={data.links[0].url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ marginRight: "15px" }}
                            >
                              <img
                                src={Twitterlogo}
                                alt="Twitter logo"
                                className="card-socialmedia nopadding align-self-start"
                              />
                            </a>
                          ) : (
                            <></>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {modal === true ? (
        <ModalSpeaker data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
