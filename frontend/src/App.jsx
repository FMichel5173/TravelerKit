import React, { useState, useEffect } from "react";

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
  const [bgImg, setBgImg] = useState(
    "https://images.unsplash.com/photo-1529592767881-c6bb394eb83d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
  );

  useEffect(() => {
    const bgUrl = `https://api.unsplash.com/search/photos?page=1&query=${currentCountry}&client_id=XuPw48z1TijSMvcA-Faw1EjMb5kyrrqwxv6fnV8cCog`;

    const fetchData = async () => {
      try {
        const response = await fetch(bgUrl);
        const json = await response.json();
        const res = json.results[0].links.download;
        setBgImg(res);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, [currentCountry]);

  return (
    <div className="App">
      <Header bgImage={bgImg} airbnbLink={airbnb} onSaveChange={saveData} />
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
