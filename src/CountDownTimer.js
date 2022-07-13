import React from "react";
import CountDown from "reactjs-countdown";
import "./CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import {
  isDesktop,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="CountDownTimer">
      {!isMobileOnly ? (
        <Container fluid={true} className="countDown">
          <Row className="countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="timer-date"> 25th June 2022 </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="timer-title">
                    {" "}
                    aMS Delhi{" "}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="June 25, 2022  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="countDown-mobile">
          <Row className="timer-data-row">
            <Col>
              <span className="timer-date-mobile"> 25th June 2022 </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="timer-title-mobile">
                {" "}
                aMS Delhi{" "}
              </span>
            </Col>
          </Row>
          <Row className="timer-mobile">
            <Col>
              <CountDown end="June 25, 2022  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
