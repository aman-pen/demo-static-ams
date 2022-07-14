import React, { useState, useEffect, useInsertionEffect } from "react";
import "./App.scss";
import { Header } from "./Header";
import { About } from "./About";
import { Donate } from "./Donate";
import { Agenda } from "./Agenda";
import { Speaker } from "./Speaker";
import { Sponsor } from "./Sponsor";
import { UserGroups } from "./UserGroups";
import { Footer } from "./Footer";
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";
import { Api } from "../src/services/Api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    Api().then((item) => {
      if (mounted) {
        setData(item);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="container-fluid icss">
      {console.log(data)}
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
