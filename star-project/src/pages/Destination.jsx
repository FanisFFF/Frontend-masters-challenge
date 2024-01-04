import "./Destination.css";
import Planet from "./Planets";
import data from "../data.json";
import { useState } from "react";

console.log(data);
data.destinations.forEach((el) => console.log(el));
function Destination() {
  const [curPlanet, setPlanet] = useState("Moon");
  function handlePlanet(planet) {
    console.log(planet);
    setPlanet(planet);
  }
  return (
    <>
      <div className="destination--main">
        {data.destinations.map((el, i) => (
          <Planet
            key={i}
            name={el.name}
            description={el.description}
            avg={el.distance}
            est={el.travel}
            onPlanet={handlePlanet}
            curPlanet={curPlanet}
            img={el.images.png}
          />
        ))}
      </div>
    </>
  );
}

export default Destination;
