import "./PageTitle.css";

function PageTitle({ num, title }) {
  return (
    <>
      <h2 className="page-title--header">
        <span className="page-title--header-num">{num}</span>
        {title}
      </h2>
    </>
  );
}

export default PageTitle;
