import "../styles/Footer.css"
import logo from '../assets/logo.png';

export default function Footer() {
  //TODO: Add paths to the <a> tags
  return (
    <footer>
      <div className="footer-child">
        <div className="footer-content">
          <h2>Customer Service</h2>
          <a>About Payment</a>
          <a>Returns Policy</a>
        </div>
      </div>
      <div className="footer-child-center">
        <div className="footer-content">
          <h2 id="hardcore">Hardcore</h2>
          <div className="logo-container">
            <img className="footer-logo" src={logo} alt="Hardcore logo" />
          </div>
        </div>
      </div>
      <div className="footer-child">
        <div className="footer-content">
          <h2>About Company</h2>
          <a>Our Values</a>
          <a>0% Officially Licensed</a>
        </div>
      </div>
    </footer>
  )
}
