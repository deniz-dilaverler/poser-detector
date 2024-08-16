import { useState, useEffect } from 'react';

const useCartItems = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    const updateCartItems = () => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItems(cart);
        } catch (error) {
            console.error('Failed to parse cart from localStorage:', error);
        }
    };

    const addToCart = (item: any, size: string) => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({ ...item, size });
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(cart)
            setCartItems(cart);
        } catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    };

    const addToCartJustin = () => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({ id: 1, artist: "Justin Bieber", description: "What You Deserve", price: 0, images: ["justin-bieber", "white_back"], size: "XS" });
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(cart)
            setCartItems(cart);
        } catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    }

    const removeFromCart = (itemId: number) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart = cart.filter((item: any) => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            setCartItems(cart)
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
        }
    };

    useEffect(() => {
        updateCartItems();
    }, []);


    return {
        cartItems,
        addToCart,
        removeFromCart,
        addToCartJustin,
    };
};

export default useCartItems;
