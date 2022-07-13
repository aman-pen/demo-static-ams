import React, {useState } from "react";
import "./Agenda.scss";
import { ShowSessionData } from "./ShowSessionData";
import TrackDetails from "./content/TrackDetails.json";
import {Col } from "reactstrap";

export const Agenda = () => {
  const trackfunc = (trackValue) => {
    setTrack(trackValue);
    var temptrack = trackDetailsState;
    let i = 0;
    for (i = 0; i < temptrack.length; i++) {
      if (temptrack[i].trackId === trackValue) {
        temptrack[i].isActive = true;
      } else {
        temptrack[i].isActive = false;
      }
    }
    setTrackDetails(temptrack);
  };

  const [track, setTrack] = useState("1");

  const [trackDetailsState, setTrackDetails] = useState(TrackDetails);
  return (
    <div className="agenda" id="agenda">
      <h1 className="agenda-heading"> AGENDA </h1>
      <div className="agenda-para-text-1">
        Check out the agenda and the sessions for the aMS Delhi 2022 event.
      </div>
      <div className="agenda-para-text-2">
        This event has an ensemble of amazing workshops and seminars by
        professionals.
      </div>
      <div className="container-fluid track-list">
        <div className="row track-row">
          {trackDetailsState.map((data) => {
            return (
              <Col
                xs="3"
                className="tracks"
                key={data.trackId}
                onClick={() => trackfunc(data.trackId)}
              >
                {data.isActive === true ? (
                  <div
                    className="track-data"
                    style={{ backgroundColor: "rgb(102, 72, 135)", color: "#fff" }}
                  >
                    <div className="track-head"> {data.trackTitle} </div>
                    <span className="track-span"> {data.trackSubTitle}</span>
                    <span className="track-date"> {data.trackDate}</span>
                  </div>
                ) : (
                  <div className="track-data">
                    <div className="track-head"> {data.trackTitle} </div>
                    <span className="track-span"> {data.trackSubTitle}</span>
                    <span className="track-date"> {data.trackDate}</span>
                  </div>
                )}
              </Col>
            );
          })}
        </div>
      </div>
      <ShowSessionData CurrentTrackID={track} />
    </div>
  );
};
