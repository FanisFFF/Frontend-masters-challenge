import { useState } from "react";
import data from "../data.json";
import "./Crew.css";
import Member from "./Member";

console.log(data.crew);
function Crew() {
  const [curMember, setMember] = useState(1);
  function handlePlanet(planet) {
    console.log(planet);
    setPlanet(planet);
  }
  return (
    <>
      <div className="crew--main">
        {data.crew.map((el, i) => (
          <Member
            role={el.role}
            img={el.images.png}
            description={el.bio}
            name={el.name}
            key={i}
            onMember={setMember}
            curMember={curMember}
            onOrder={i}
          />
        ))}
      </div>
    </>
  );
}

export default Crew;
