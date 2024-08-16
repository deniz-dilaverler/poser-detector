import "../styles/Footer.css"
import logo from '../assets/logo.png';

export default function Footer() {
  //TODO: Add paths to the <a> tags
  return (
    <footer>
      <div className="footer-child">
        <div className="footer-content">
          <h2 className="artist">Customer Service</h2>
          <a className="description  footer-content-link" href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Icons created by Freepik - Flaticon</a>
          <p className="description">Photo by <a className="footer-content-link-inline" href="https://unsplash.com/@bertorendon13?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Roberto Rendon</a> on <a className="footer-content-link-inline" href="https://unsplash.com/photos/a-crowd-of-people-at-a-concert-with-their-hands-in-the-air--Ma-aFuivjs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
          <p className="description">Other images from Freepik</p>
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

    </footer>
  )
}
