import MainHeading from "../components/MainHeading";
import DestinationNav from "../components/DestinationNav";

function Planet({ name, description, avg, est, onPlanet, curPlanet, img }) {
  return (
    <>
      {curPlanet === name ? (
        <>
          <div className="destination--image-container">
            <img src={`../../public/${img}`} alt="" />
          </div>
          <div className="destionation--text-contaier">
            <DestinationNav
              curPlanet={curPlanet}
              onPlanet={onPlanet}
            ></DestinationNav>
            <MainHeading props={name}></MainHeading>
            <p className="destination--description">{description}</p>
            <hr />
            <div className="destination--distance">
              <div className="destination--avg">
                <p>Avg. distance </p>
                <p className="destionation--font-change">{avg}</p>
              </div>
              <div className="destination--est">
                <p>{est}</p>
                <p className="destionation--font-change">Est. travel time</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default Planet;
