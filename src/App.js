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
import { KeyNoteSpeaker } from "./KeyNoteSpeaker";
import { CountDownTimer } from "./CountDownTimer";
import { EventTeam } from "./EventTeam";

function App() {
  const [data, setData] = useState();
  useEffect(
    // export const Api = () => {
    async function Api() {
      const response = await fetch(
        "https://sessionize.com/api/v2/msqv8bxy/view/All",
        {
          method: "GET",
          // headers: {
          //   "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
          //   "x-rapidapi-key": "your_api_key",
          // },
        }
      );
      const data = await response.json();
      setData(data); // Extracting data as a JSON Object from the response
    },
    []
  );
  return (
    <div className="container-fluid icss">
      {console.log(data.rooms[0])}
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
