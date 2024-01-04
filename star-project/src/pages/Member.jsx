import SecondaryHeading from "../components/SecondaryHeading";
import PageTitle from "../components/PageTitle";
import CrewNav from "../components/CrewNav";

function Member({
  name,
  description,
  img,
  role,
  onMember,
  curMember,
  onOrder,
}) {
  return (
    <>
      <>
        {curMember === onOrder ? (
          <>
            <div className="crew--text-contaier">
              <PageTitle num="02" title="Meet your crew"></PageTitle>
              <p className="crew--title">{role}</p>
              <SecondaryHeading props={name}></SecondaryHeading>
              <p className="crew--description">{description}</p>
              <CrewNav
                curMember={curMember}
                onMember={onMember}
                onName={name}
              ></CrewNav>
            </div>
            <div className="crew--image-container">
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
export default Member;
