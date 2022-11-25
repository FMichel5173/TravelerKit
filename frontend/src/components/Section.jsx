import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Button from "./Button";
import "./Section.css";
import data from "../data/sentences";
import countriesLanguages from "../data/countriesLanguages";

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

function Section({ currentCountry }) {
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
                  const target = countriesLanguages.find(
                    (country) =>
                      country.name.toLowerCase() ===
                      currentCountry.toLowerCase()
                  );
                  if (target) {
                    fetch(
                      `${import.meta.env.VITE_BACKEND_URL}/translate?q=${
                        el.sentence
                      }&source=french&target=${target.language.name}`
                    )
                      .then((response) => response.json())
                      .then((incomingData) =>
                        // eslint-disable-next-line no-alert
                        alert(incomingData.translations[0])
                      );
                  }
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

Section.propTypes = {
  currentCountry: PropTypes.string.isRequired,
};

export default Section;
