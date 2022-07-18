import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { Footer } from "./Footer";
// import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
import { webScrap } from "./services/Api";
import { SpeakerRegister } from "./SpeakerRegister";

function App() {
  const [endDate, setEndDate] = useState();
  const [currDate] = useState(new Date());
  useEffect(() => {
    webScrap().then((item) => {
      setEndDate(item);
    });
  }, []);
  return (
    <div className="container-fluid icss">
      {/* {(console.log(endDate), "scrapDate")} */}
      <Header />
      <CountDownTimer />
      <About />
      <Donate />
      {currDate < endDate ? (
        <SpeakerRegister />
      ) : (
        <>
          <Agenda />
          <Speaker />
        </>
      )}
      {/* <KeyNoteSpeaker /> */}
      <Sponsor />
      <UserGroups />
      <EventTeam />
      <Footer />
    </div>
  );
}
export default App;
