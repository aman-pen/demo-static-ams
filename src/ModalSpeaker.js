import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";
import { ApiSession } from "../src/services/Api";

const ModalSpeaker = ({ modal, toggle, data }) => {
  const [session, setSession] = useState([]);

  useEffect(() => {
    let mounted = true;
    ApiSession().then((item) => {
      if (mounted) {
        setSession(item);
      }
    });
    return () => (mounted = false);
  }, []);

  const closeBtn = <button className="close" onClick={toggle}></button>;
  const CurrentSessions = session.filter(
    (s) =>
      s.id === data.sessions.id ||
      s.id === data.sessions.id ||
      s.id === data.sessions.id
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {data.fullName}
          {/* <button type="button" className="close-icon"></button> */}
        </ModalHeader>
        <ModalBody className="nopadding">
          <div className="p-5 text-center">
            <img
              src={data.profilePicture}
              // alt={data.speakerAltText}
              alt="speaker"
              className="modal-image"
            />
          </div>
          <div className="bg-grey speaker-details">
            <h4 className="mb-4">BIO</h4>
            <p className="speaker-information">{data.bio}</p>

            {CurrentSessions.length > 0
              ? CurrentSessions.map((sdata) => {
                  return (
                    <div className="speaker-session-details">
                      <div className="divider"></div>
                      <div className="row">
                        <div className="modal-track-num col-4">
                          Track
                          {/* {sdata.sessions[0].id} */}
                        </div>
                        <div className="col-8 speaker-session-time">
                          <span>
                            {/* {sdata.sessionTime} */}
                            12:10 - 1:55
                          </span>
                        </div>
                      </div>

                      <div className="speaker-session-title">
                        {
                          sdata.sessions[
                            sdata.sessions.findIndex(
                              (obj) => obj.id === data.sessions[0].id.toString()
                            )
                          ].title
                        }
                        {/* {console.log(
                          sdata.sessions[
                            sdata.sessions.findIndex(
                              (obj) => obj.id == data.sessions[0].id
                            )
                          ].title
                        )}
                        {console.log(sdata.sessions, "sessionTitle")} */}
                      </div>
                    </div>
                  );
                })
              : null}

            <div className="divider"></div>
            <div className="image-array">
              {data.links[1] != null ? (
                <a href={data.links[1].url} target="_blank" rel="noreferrer">
                  <img
                    src={LinkedInlogo}
                    alt="LinkedIn logo"
                    className="mr-4"
                  />
                </a>
              ) : (
                <></>
              )}
              {data.links[0] != null ? (
                <a href={data.links[0].url} target="_blank" rel="noreferrer">
                  <img src={twitterlogo} alt="Twitter logo" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalSpeaker;
