import React, { useState } from "react";
import Button from "./Button";
import "./Section.css";
import data from "../data/sentences";

const buttonsData = [
  { category: "🔤 Les Bases", label: "basic" },
  { category: "🛫 à l'Aéroport", label: "airport" },
  { category: "✈️ Dans l'avion", label: "plane" },
  { category: " 🛣️ ...Une fois arrivé", label: "arrived" },
  { category: "🏪 Dans un magasin", label: "store" },
  { category: "🛎️ à l'Hotel", label: "hotel" },
  { category: "🏙️ Dans la ville", label: "city" },
  { category: "🍴 Au restaurant", label: "restaurant" },
];

function Section() {
  const [activeFilter, setActiveFilter] = useState();
  return (
    <div className="buttonContainer">
      {activeFilter ? (
        <div className="grid">
          {data
            .filter((el) => el.context === activeFilter)
            .map((el) => (
              <button
                type="button"
                className="sentences"
                key={Math.floor(Math.random() * 98899999)}
                onClick={() => {
                  const target = "english";
                  fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/translate?q=${
                      el.sentence
                    }&source=french&target=${target}`
                  )
                    .then((response) => response.json())
                    .then((incomingData) =>
                      console.warn(incomingData.translations[0])
                    );
                }}
              >
                {el.sentence}
              </button>
            ))}
          <button
            className="buttons"
            type="button"
            onClick={() => {
              setActiveFilter("");
            }}
          >
            Retour
          </button>
        </div>
      ) : (
        buttonsData.map((buttonData) => (
          <Button
            key={Math.floor(Math.random() * 98899999)}
            handleClick={() => {
              setActiveFilter(buttonData.label);
            }}
            className="buttons"
            category={buttonData.category}
          />
        ))
      )}
    </div>
  );
}

export default Section;
