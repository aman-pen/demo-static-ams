import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Agenda.scss";
import Sessions from "./content/Sessions.json";
import { Row, Col } from "reactstrap";
import ModalAgenda from "./ModalAgenda";
import MicrosoftTeams from "./images/website/MicrosoftTeams.png";
import Speakers from "./content/SpeakersData.json";
import EventData from "./content/EventData.json";
import ModalSpeaker from "./ModalSpeaker";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";

export const ShowSessionData = (props) => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };

  const [SpeakerModal, setSpeakerModal] = useState(false);
  const [clickedSpeakerData, setClickedSpeakerData] = useState([]);
  const SpeakerModaltoggle = (data) => {
    setClickedSpeakerData(data);
    setSpeakerModal(!SpeakerModal);
  };

  const ShowSessionUrl = EventData[0].showSessionUrl;
  const CurrentSessions = Sessions.filter(
    (d) => d.trackId.toString() === props.CurrentTrackID
  );
  return (
    <>
      <div className="container-fluid trackdata">
        {CurrentSessions.map((data) => {
          return (
            <React.Fragment key={data.sessionId}>
              <Row className=" trackdata-bg " key={data.event}>
                {ShowSessionUrl === "false" ? (
                  <>
                    <Col
                      md={12}
                      lg={3}
                      className="p-0 cursor-click"
                      onClick={() => toggle(data)}
                    >
                      <div className="event-time"> {data.sessionTime} </div>
                    </Col>
                    <Col
                      md={12}
                      lg={5}
                      className=" event-desc cursor-click"
                      onClick={() => toggle(data)}
                    >
                      {data.sessionTitle}
                    </Col>
                    <Col md={12} lg={4} className="event-speakers">
                      <div className="speaker-head"> Speakers </div>
                      <div>
                        {data.speaker3Id != null ? (
                          <div className="speaker3">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={
                                //   () => SpeakerModaltoggle(data)
                                //   // SpeakerModaltoggle(
                                //   //   Speakers.filter(
                                //   //     (s) => s.speakerId === data.speaker3Id
                                //   //   )[0]
                                //   // )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker3Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>

                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker3Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}
                        {data.speaker2Id != null ? (
                          <div className="speaker2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={() =>
                                //   SpeakerModaltoggle(
                                //     Speakers.filter(
                                //       (s) => s.speakerId === data.speaker2Id
                                //     )[0]
                                //   )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker2Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>

                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker2Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}

                        {data.speaker1Id != null ? (
                          <div className="speaker1">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={() =>
                                //   SpeakerModaltoggle(
                                //     Speakers.filter(
                                //       (s) => s.speakerId === data.speaker1Id
                                //     )[0]
                                //   )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker1Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>

                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker1Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={12} lg={2} onClick={() => toggle(data)}>
                      <div className="event-time"> {data.sessionTime} </div>
                    </Col>
                    <Col
                      md={12}
                      lg={6}
                      className=" event-desc"
                      onClick={() => toggle(data)}
                    >
                      {data.sessionTitle}
                    </Col>
                    <Col md={12} lg={4} className="event-speakers">
                      <div className="speaker-head"> Speakers </div>
                      <div className="speaker-wrapper-teams">
                        {data.speaker3Id != null ? (
                          <div className="speaker3">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={() =>
                                //   SpeakerModaltoggle(
                                //     Speakers.filter(
                                //       (s) => s.speakerId === data.speaker3Id
                                //     )[0]
                                //   )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker3Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker3Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}
                        {data.speaker2Id != null ? (
                          <div className="speaker2">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={() =>
                                //   SpeakerModaltoggle(
                                //     Speakers.filter(
                                //       (s) => s.speakerId === data.speaker2Id
                                //     )[0]
                                //   )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker2Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker2Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}

                        {data.speaker1Id != null ? (
                          <div className="speaker1">
                            <LazyLoad height={70} width={70} debounce={false}>
                              <ImageLoader
                                // onClick={() =>
                                //   SpeakerModaltoggle(
                                //     Speakers.filter(
                                //       (s) => s.speakerId === data.speaker1Id
                                //     )[0]
                                //   )
                                // }
                                src={`${
                                  Speakers.filter(
                                    (s) => s.speakerId === data.speaker1Id
                                  )[0].speakerImage
                                }`}
                                alt={data.speakerName}
                                width="50px"
                                height="50px"
                                className="agenda-speaker-img"
                              />
                            </LazyLoad>
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId === data.speaker1Id
                                )[0].speakerName
                              }
                            </span>
                          </div>
                        ) : null}
                        <div className="event-teams">
                          <a
                            href={data.sessionUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              title="Click here to join the session"
                              src={MicrosoftTeams}
                              alt="MicrosoftTeams"
                              className="teams-image"
                            />
                            <p class="teams-img__description">J</p>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </React.Fragment>
          );
        })}
      </div>
      {modal === true ? (
        <ModalAgenda data={clickedData} modal={modal} toggle={toggle} />
      ) : null}
      {SpeakerModal === true ? (
        <ModalSpeaker
          data={clickedSpeakerData}
          modal={SpeakerModal}
          toggle={SpeakerModaltoggle}
        />
      ) : null}
    </>
  );
};
