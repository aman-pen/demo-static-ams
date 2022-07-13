/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Modal.scss";
import Speakers from "./content/SpeakersData.json";

const ModalAgenda = ({ modal, toggle, data }) => {
  const closeBtn = <button className="close" onClick={toggle}></button>;
  return (
    <div>
      <Modal className="agenda-dialog" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {data.sessionTime}
        </ModalHeader>
        <ModalBody>
          <div className="session-Title pb-5">
            <span>{data.sessionTitle}</span>
          </div>
          <div className="session-introtext">
            <span>{data.sessionDescription}</span>
          </div>
          <div className="divider"></div>
          <h2 className="text-center py-4">Speakers</h2>
          <div className="speaker-array row">
            {data.speaker1Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker1Id)[0]
                      .speakerImage
                  }`}
                  className="speaker-img mb-3"
                  alt="speaker image"
                />
                <p className="speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker1Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}

            {data.speaker2Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker2Id)[0]
                      .speakerImage
                  }`}
                  className="speaker-img mb-3"
                  alt="speaker image"
                />
                <p className="speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker2Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}

            {data.speaker3Id != null ? (
              <div className="col">
                <img
                  src={`${
                    Speakers.filter((s) => s.speakerId === data.speaker3Id)[0]
                      .speakerImage
                  }`}
                  className="speaker-img mb-3"
                  alt="speaker image"
                />
                <p className="speaker-name">
                  {
                    Speakers.filter((s) => s.speakerId === data.speaker3Id)[0]
                      .speakerName
                  }
                </p>
              </div>
            ) : null}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalAgenda;
