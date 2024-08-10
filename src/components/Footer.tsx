import "../styles/Footer.css"


export default function Footer() {
  //TODO: Change div with className `dot` to a logo
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
          <div className="dot" />
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
