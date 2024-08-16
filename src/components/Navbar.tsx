import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';
import '../styles/Navbar.css';
import CartItem from "./CartItem.tsx";
import useCartItems from '../data/useCartItems';
const Navbar = () => {
    const { cartItems } = useCartItems();
    console.log(cartItems)
    return (

        <nav>
            <div className="logo-container">
                <a className="nav-button" href='/'>
                    <img src={logo} alt="" />
                </a>
                <a className="nav-button" href='/'>
                    <h1 className="main-title">HARDCORE</h1>
                </a>
            </div>
            <div>

                <a className="nav-button nav-button-right cart" href={"/cart"}>
                    <img src={cart} alt="" />
                </a>
                <div className="hide">
                    {cartItems.length === 0 ? (
                        <p className="description">Your cart is empty. <br /> Shop now!</p>
                    ) : (
                        <div>
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <CartItem id={item.id} artist={item.artist} description={item.description} price={item.price} images={item.images} size={item.size} imageSize={"small"} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
