import "./CrewNav.css";
function CrewNav({ onMember, curMember }) {
  console.log(onMember);
  console.log(curMember);
  return (
    <div className="crew-nav">
      <ul>
        <div
          onClick={() => {
            onMember(0);
          }}
          className={
            curMember === 0
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
        <div
          onClick={() => {
            onMember(1);
          }}
          className={
            curMember === 1
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
        <div
          onClick={() => {
            onMember(2);
          }}
          className={
            curMember === 2
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
        <div
          onClick={() => {
            onMember(3);
          }}
          className={
            curMember === 3
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
      </ul>
      <div></div>
    </div>
  );
}
export default CrewNav;
