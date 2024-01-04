import { useState } from "react";
import "./DestinationNav.css";
function DestinationNav({ onPlanet, curPlanet }) {
  const [isActive, setIsActive] = useState("Moon");

  return (
    <div className="destinationNav">
      <ul>
        <li className={curPlanet === "Mars" ? "destination-selected" : ""}>
          <a
            onClick={() => {
              setIsActive("Mars");
              onPlanet("Mars");
            }}
            href="#"
          >
            Mars
          </a>
        </li>
        <li className={curPlanet === "Moon" ? "destination-selected" : ""}>
          <a
            onClick={() => {
              setIsActive("Moon");
              onPlanet("Moon");
            }}
            href="#"
          >
            Moon
          </a>
        </li>
        <li className={curPlanet === "Europa" ? "destination-selected" : ""}>
          <a
            onClick={() => {
              setIsActive("Europa");
              onPlanet("Europa");
            }}
            href="#"
          >
            Europa
          </a>
        </li>
        <li className={curPlanet === "Titan" ? "destination-selected" : ""}>
          <a
            onClick={() => {
              setIsActive("Titan");
              onPlanet("Titan");
            }}
            href="#"
          >
            Titan
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
export default DestinationNav;
