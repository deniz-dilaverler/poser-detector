import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
          <img src={logo} alt=""/>
          <h1 className="main-title">HARDCORE</h1>
      </div>
        <div>
            <button className="shopping-cart-button">
                <img src={cart} alt=""/>
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
