import { useState } from "react";
import "./styles.css";
import { DateTime } from "luxon";
function App() {
  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();
  const dateObject1 =
    years && months && days ? { day: days, month: months, year: years } : {};
  const start = DateTime.fromObject(dateObject1); // Just an example time from the past, using the ISO standard
  const end = DateTime.now(); // Current time
  const diff = end.diff(start, [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ]);

  const dateObject = diff.toObject();
  function handleDays(e) {
    console.log(e.target.value);
    setDays(e.target.value);
  }
  function handleMonths(e) {
    setMonths(e.target.value);
  }
  function handleYears(e) {
    setYears(e.target.value);
  }

  // let computedAge = new Date(age);

  return (
    <>
      <h1>{12}</h1>
      <div className="app">
        <form action="">
          <div className="container--1">
            <label htmlFor="day">DAY</label>
            <input
              onChange={handleDays}
              name="day"
              type="text"
              placeholder="DD"
              style={!dateObject.days ? { backgroundColor: "red" } : ""}
            />
            <p>{!dateObject.days ? "Must be a valid day" : ""}</p>
          </div>
          <div className="container--2">
            <label htmlFor="month">MONTH</label>
            <input
              onChange={handleMonths}
              name="month"
              type="text"
              placeholder="MM"
            />
            <p>{!dateObject.days ? "Must be a valid month" : ""}</p>
          </div>
          <div className="container--3">
            <label htmlFor="year">YEAR</label>
            <input
              onChange={handleYears}
              name="year"
              type="text"
              placeholder="YYYY"
            />
            <p>{!dateObject.days ? "Must be a valid year" : ""}</p>
          </div>
        </form>
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
            className="arrow-icon"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </div>
        <hr className="horizontal-line" />
        <div className="results">
          <h1>
            <span className="colored-text">
              {dateObject.years ? dateObject.years : "--"}
            </span>
            years
          </h1>
          <h1>
            <span className="colored-text">
              {dateObject.months ? dateObject.months : "--"}
            </span>{" "}
            months
          </h1>
          <h1>
            <span className="colored-text">
              {dateObject.days ? dateObject.days : "--"}
            </span>
            days
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
