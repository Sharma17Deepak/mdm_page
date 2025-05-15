import logo from "./../assets/bot_logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={logo} alt="1MDM Logo" className="footer-logo" />
          <p>One Medical Devices<br />Market Place</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#">Sell on 1MDM</a>
            <a href="#">Pricing</a>
            <a href="#">About Us</a>
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Brands</a>
          </div>
          <div className="footer-column">
            <h4>Press Room</h4>
            <a href="#">Images & B-roll</a>
            <h4>Policies</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Delivery Information</a>
          </div>
          <div className="footer-column">
            <h4>Reach Us</h4>
            <a href="#">Corporate Information</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-p">© 2025 1MDM ⚡ by SuperLabs</p>
      </div>
    </footer>
  );
};

export default Footer;
