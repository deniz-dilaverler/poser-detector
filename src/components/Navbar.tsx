import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';
import home from '../assets/home.png';
import '../styles/Navbar.css';
const Navbar = () => {
  return (

        <nav>
            <div className="logo-container">
                <img src={logo} alt=""/>
                <h1 className="main-title">HARDCORE</h1>
            </div>
            <div>
                <a className="shopping-cart-button" href={"/"}>
                    <img src={home} alt=""/>
                </a>
                <a className="shopping-cart-button" href={"/cart"}>
                    <img src={cart} alt=""/>
                </a>
            </div>
        </nav>
  );
};

export default Navbar;
