import React, { useState } from "react";
import Button from "./Button";
import "../Section.css";
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
        <div>
          {data
            .filter((el) => el.context === activeFilter)
            .map((el) => (
              <p key={Math.floor(Math.random() * 98899999)}>{el.sentence}</p>
            ))}
          <button type="button" onClick={() => setActiveFilter("")}>
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
