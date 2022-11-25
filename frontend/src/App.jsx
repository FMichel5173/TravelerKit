import React, { useState } from "react";

import Header from "./components/Header";
import Flag from "./components/Flag";
import Section from "./components/Section";

import "./App.css";

function App() {
  const [currentCountry, setCurrentCountry] = useState();
  const saveData = (data) => {
    setCurrentCountry(data);
  };
  const airbnb = `https://airbnb.com/s/${currentCountry}`;
  const url = `https://countryflagsapi.com/png/${currentCountry}`;
  return (
    <div className="App">
      <Header airbnbLink={airbnb} onSaveChange={saveData} />
      <Flag
        flag={
          url === "undefined" ? "https://countryflagsapi.com/png/france" : url
        }
        country={currentCountry}
      />
      <Section />
    </div>
  );
}

export default App;
