import { useState } from "react";
import data from "../data.json";
import "./Technology.css";
import Tech from "./Tech";

console.log(data.crew);
function Technology() {
  const [curTech, setTech] = useState(1);
  function handlePlanet(planet) {
    console.log(planet);
    setPlanet(planet);
  }
  return (
    <>
      <div className="crew--main">
        {data.technology.map((el, i) => (
          <Tech
            img={el.images.portrait}
            description={el.description}
            name={el.name}
            key={i}
            onTech={setTech}
            curTech={curTech}
            onOrder={i}
          />
        ))}
      </div>
    </>
  );
}

export default Technology;
