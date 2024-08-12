import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';
import home from '../assets/home.png';
import '../styles/Navbar.css';
import {useEffect, useState} from "react";
import CartItem from "./CartItem.tsx";
const Navbar = () => {
    const [cartItems, setCartItems] = useState([]);

    const updateCartItems = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    };

    useEffect(() => {
        // Set up a listener to update cart items when localStorage changes
        window.addEventListener('storage', updateCartItems);

        // Initial load
        updateCartItems();

        // Clean up listener on unmount
        return () => {
            window.removeEventListener('storage', updateCartItems);
        };
    }, []);

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
                <a className="shopping-cart-button cart" href={"/cart"}>
                    <img src={cart} alt=""/>
                </a>
                <div className="hide">
                    {cartItems.length === 0 ? (
                        <p className="description">Your cart is empty. <br/> Shop now!</p>
                    ) : (
                        <div>
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <CartItem id={item.id} artist={item.artist} description={item.description} price={item.price} images={item.images} size={item.size} imageSize={"small"}/>
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
