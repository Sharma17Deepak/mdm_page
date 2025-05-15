import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="heading">
        <p>World's Largest Medical Equipment Market Place</p>
        <a href="#">My Account | Contact Us</a>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo}/>
        </div>
        <div className="links">
          <a href="#">About us</a>
          <a href="#">Our Story</a>
          <a href="#">Sell on 1MDM</a>
          <a href="#">Pricing</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
