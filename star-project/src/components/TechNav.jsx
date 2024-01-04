import "./TechNav.css";
function TechNav({ onTech, curTech }) {
  console.log(onTech);
  console.log(curTech);
  return (
    <div className="crew-nav">
      <ul>
        <div
          onClick={() => {
            onTech(0);
          }}
          className={
            curTech === 0
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
        <div
          onClick={() => {
            onTech(1);
          }}
          className={
            curTech === 1
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
        <div
          onClick={() => {
            onTech(2);
          }}
          className={
            curTech === 2
              ? "crew-nav--dot--selected crew-nav--dot"
              : " crew-nav--dot"
          }
        ></div>
      </ul>
      <div></div>
    </div>
  );
}
export default TechNav;
