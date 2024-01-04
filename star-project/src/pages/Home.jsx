import MainHeading from "../components/MainHeading";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="main-home">
          <div className="home--text-container">
            <p>So, you want to travel to</p>
            <MainHeading>Space</MainHeading>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </p>
          </div>
        </div>
        <div className="explore">Explore</div>
      </div>
    </>
  );
}

export default Home;
