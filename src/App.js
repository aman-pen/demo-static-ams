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
import rp from "request-promise";
function App() {
  useEffect(() => {
    rp({
      url: "https://sessionize.com/global-azure-blr-2022/",
      headers: {
        "User-Agent": "Request-Promise",
      },
    }).then((html) => console.log(html));
    // .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-fluid icss">
      <Header />
      <CountDownTimer />
      <About />
      <Donate />
      <Agenda />
      {/* <KeyNoteSpeaker /> */}
      <Speaker />
      <Sponsor />
      <UserGroups />
      <EventTeam />
      <Footer />
    </div>
  );
}
export default App;
