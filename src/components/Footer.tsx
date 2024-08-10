import "../styles/Footer.css"


export default function Footer() {
  //TODO: Change div with className `dot` to a logo
  return (
    <footer>
      <div className="footer-child">
        <div className="footer-content">
          <h2>Customer Service</h2>
          <p>About Payment</p>
          <p>Returns Policy</p>
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
          <p>Our Values</p>
          <p>0% Officially Licensed</p>
        </div>
      </div>
    </footer>
  )
}
