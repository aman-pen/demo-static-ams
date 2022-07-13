import React, { useState } from "react";
import "./Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalKeynote from "./ModalKeynote";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Twitterlogo from "./images/website/twitterblue.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft_logo.png";

export const KeyNoteSpeaker = () => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="keynote">
        <h1 className="keynote-heading text-center">KeyNote Speakers</h1>
        <div className="row justify-content-center">
          {SpeakersData.map((data) => {
            return (
              <>
                {data.keynoteSpeaker === "true" && (
                  <div
                    className=" p-4 col-xs-12 col-md-6 col-xl-4 "
                    key={data.speakerId}
                  >
                    <Card className="keynote-card shadow nopadding ">
                      <div className="keynote-image">
                        <div id="cube">
                          <div class="square-holder">
                            <div class="square" id="square"></div>
                          </div>
                        </div>
                        <LazyLoad
                          height={400}
                          debounce={false}
                          className="cursor-click"
                        >
                          <ImageLoader
                            onClick={() => toggle(data)}
                            src={`${data.speakerImage}`}
                            alt={data.speakerAltText}
                          />
                        </LazyLoad>
                      </div>
                      <CardBody>
                        <div className="row w-100 flex-nowrap cursor-click">
                          <CardTitle
                            tag="h3"
                            className="nopadding col"
                            onClick={() => toggle(data)}
                          >
                            {data.speakerName}
                          </CardTitle>
                        </div>
                        <CardSubtitle
                          tag="p"
                          className="mb-2 text-muted cursor-click"
                          onClick={() => toggle(data)}
                        >
                          {data.speakerTitle}, {data.speakerSubTitle}
                        </CardSubtitle>
                        <div className="social-media-array">
                          {data.MVPstatus === "true" ? (
                            <div>
                              <img
                                src={MVPlogo}
                                alt="MVP"
                                className="card-linkedIn nopadding align-self-start cursor-none"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data.MicrosoftEmployee === "true" ? (
                            <div>
                              <img
                                src={Microsoftlogo}
                                alt="Microsoft Employee"
                                className="card-linkedIn nopadding align-self-start"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data.speakerLinkedIn != null ? (
                            <a
                              href={data.speakerLinkedIn}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={LinkedInlogo}
                                alt="LinkedIn logo"
                                className="card-linkedIn nopadding align-self-start"
                              />
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.speakerTwitter != null ? (
                            <a
                              href={data.speakerTwitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={Twitterlogo}
                                alt="Twitter logo"
                                className="card-linkedIn nopadding align-self-start"
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
        <ModalKeynote data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
