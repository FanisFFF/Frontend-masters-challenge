import SecondaryHeading from "../components/SecondaryHeading";
import PageTitle from "../components/PageTitle";
import TechNav from "../components/TechNav";

function Tech({ name, description, img, role, onTech, curTech, onOrder }) {
  return (
    <>
      <>
        {curTech === onOrder ? (
          <>
            <div className="tech--text-contaier">
              <PageTitle num="02" title="Meet your tech"></PageTitle>
              <p className="tech--title">{role}</p>
              <SecondaryHeading props={name}></SecondaryHeading>
              <p className="tech--description">{description}</p>
              <TechNav
                curTech={curTech}
                onTech={onTech}
                onName={name}
              ></TechNav>
            </div>
            <div className="tech--image-container">
              <img src={`../../public/${img}`} alt="" />
            </div>
          </>
        ) : (
          ""
        )}
      </>
    </>
  );
}
export default Tech;
