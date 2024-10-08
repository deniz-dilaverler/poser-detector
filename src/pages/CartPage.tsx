import { useState } from 'react';
import "../styles/CartPage.css";
import CartItem from "../components/CartItem.tsx";
import useCartItems from "../data/useCartItems.ts";
const CartPage = () => {
    const {cartItems, removeFromCart} = useCartItems();
    const [isCheckout, setIsCheckout] = useState(false);

    return (
        <div className="cartPageContainer">
            <h1 className="main-title" style={{ marginBottom: "50px" }}>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="description">Your cart is empty!</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <CartItem id={item.id} artist={item.artist} description={item.description} price={item.price} images={item.images} removeFromCart={() => removeFromCart(item.id, item.size)} size={item.size} imageSize={"large"} />
                        </div>
                    ))}
                </div>
            )}
            <div className="checkoutContainer">
                <p className="description">Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
                <button className="primary-button" onClick={() => setIsCheckout(true)}>Checkout</button>
            </div>
            {isCheckout && (
                <div>
                    <p className="description">Actually, this is not a valid website. So checkout obviously does not work.</p>
                </div>
            )}
        </div>
    );
};

export default CartPage;
