import { useState } from "react";
import { getCurrentSeason } from "../../utils/seasons";
import { Background } from "../Background/Background";
import { ContactUs } from "../ContactUs/ContactUs";
import { MainMessage } from "../MainMessage/MainMessage";
import { SeasonSelection } from "../SeasonSelection/SeasonSelection";
import { Title } from "../Title/Title";
import "./App.css";

function App() {
  const [season, setSeason] = useState(() => getCurrentSeason());

  return (
    <>
      <Background season={season} />
      <div className="main">
        <SeasonSelection season={season} setSeason={setSeason} />
        <Title />
        <MainMessage />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
