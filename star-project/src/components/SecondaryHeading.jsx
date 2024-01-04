import "./SecondaryHeading.css";

function SecondaryHeading({ props }) {
  return (
    <>
      <div className="secondary-heading">
        <h1>{props}</h1>
      </div>
    </>
  );
}

export default SecondaryHeading;
