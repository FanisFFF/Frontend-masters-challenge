import "./MainHeading.css";

function MainHeading({ props }) {
  return (
    <>
      <div className="main-heading">
        <h1>{props}</h1>
      </div>
    </>
  );
}

export default MainHeading;
