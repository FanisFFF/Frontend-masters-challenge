import Logo from "./Logo";
import NavBar from "./NavBar";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <NavBar />
      </div>
    </>
  );
}

export default Header;
