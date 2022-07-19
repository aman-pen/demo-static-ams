import React from "react";
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
// import { webScrap } from "./services/Api";
import { SpeakerRegister } from "./SpeakerRegister";
import HeaderData from "./content/HeaderData.json";

function App() {
  // Below commented code is for conditioal rendering of speaker register using web scrapping
  // couldn't work due to cors policy issues
  // const [endDate, setEndDate] = useState();
  // const [currDate] = useState(new Date());
  // useEffect(() => {
  //   webScrap()
  //     .then((item) => {
  //       setEndDate(item);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="container-fluid icss">
      <Header />
      <CountDownTimer />
      <About />
      <Donate />
      {HeaderData[0].cfsOpen ? (
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
