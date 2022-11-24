import React from "react";
import "../Section.css";

function Section() {
  return (
    <div className="buttonContainer">
      <button type="button" className="buttons">
        🔤 Les bases
      </button>
      <button type="button" className="buttons">
        🛫 à l'Aéroport
      </button>
      <button type="button" className="buttons">
        ✈️ Dans l'avion
      </button>
      <button type="button" className="buttons">
        🛣️ ...Une fois arrivé
      </button>
      <button type="button" className="buttons">
        🛎️ à l'Hotel
      </button>
      <button type="button" className="buttons">
        🍴 Au restaurant
      </button>
      <button type="button" className="buttons">
        🏙️ Dans la ville
      </button>
      <button type="button" className="buttons">
        🏪 Dans un magasin
      </button>
    </div>
  );
}

export default Section;
