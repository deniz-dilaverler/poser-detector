import "../styles/Footer.css"
import logo from '../assets/logo.png';

export default function Footer() {
  //TODO: Add paths to the <a> tags
  return (
    <footer>
      <div className="footer-child">
        <div className="footer-content">
          <h2 className="artist">Customer Service</h2>
          <a className="description">About Payment</a>
          <a className="description">Returns Policy</a>
        </div>
      </div>
      <div className="footer-child-center">
        <div className="footer-content">
          <h2 className="main-title hardcore">HARDCORE</h2>
          <div className="footer-logo-container">
            <img className="footer-logo" src={logo} alt="Hardcore logo" />
          </div>
        </div>
      </div>
      <div className="footer-child">
        <div className="footer-content">
          <h2 className="artist">About Company</h2>
          <a className="description">Our Values</a>
          <a className="description">0% Officially Licensed</a>
        </div>
      </div>
    </footer>
  )
}
