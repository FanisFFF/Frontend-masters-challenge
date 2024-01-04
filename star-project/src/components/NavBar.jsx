import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const root = document.querySelector("#root");
root.classList.add("home");
console.log(root);
function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navBar">
      <ul>
        <li className={isActive === "Home" ? "selected" : ""}>
          <p>00</p>
          <Link
            onClick={() => {
              setIsActive("Home");
              root.classList.remove("destination");
              root.classList.remove("crew");
              root.classList.remove("technology");
              root.classList.add("home");
            }}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className={isActive === "Destination" ? "selected" : ""}>
          <p>01</p>
          <Link
            onClick={() => {
              setIsActive("Destination");
              root.classList.remove("home");
              root.classList.remove("crew");
              root.classList.remove("technology");
              root.classList.add("destination");
            }}
            to="/destination"
          >
            Destination
          </Link>
        </li>
        <li className={isActive === "Crew" ? "selected" : ""}>
          <p>02</p>
          <Link
            onClick={() => {
              setIsActive("Crew");
              root.classList.remove("destination");
              root.classList.add("crew");
              root.classList.remove("technology");
              root.classList.remove("home");
            }}
            to="/crew"
          >
            Crew
          </Link>
        </li>
        <li className={isActive === "Technology" ? "selected" : ""}>
          <p>03</p>
          <Link
            onClick={() => {
              setIsActive("Technology");
              root.classList.remove("destination");
              root.classList.remove("crew");
              root.classList.add("technology");
              root.classList.remove("home");
            }}
            to="/technology"
          >
            Technology
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
export default NavBar;
