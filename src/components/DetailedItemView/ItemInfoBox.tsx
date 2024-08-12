import { useState } from 'react';

interface ItemInfoBoxProps {
    artist: string;
    description: string;
    price: number;
    selectedSize: string;
    setSelectedSize: (size: string) => void;
    onAddToCart: () => void;
}

const ItemInfoBox = (props: ItemInfoBoxProps) => {
    const sizes: string[] = ["XS", "S", "M", "L", "XL"];
    const [showError, setShowError] = useState(false);

    function addToCart() {
        if (props.selectedSize === "") {
            setShowError(true);
        } else {
            setShowError(false);
            props.onAddToCart();
        }
    }

    return (
        <div className="itemDetails">
            <h2 className="artist-title">{props.artist}</h2>
            <p className="description" style={{ paddingTop: "5px" }}>
                {props.description} - ${props.price}
            </p>
            <div className="lightDivider"></div>
            <div className="sizeContainer">
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`sizeButton ${size === props.selectedSize ? "isActive" : ""}`}
                        onClick={() => props.setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
            {showError && <p className="description sizeErrorDisplay">Select a size first!</p>}
            <button className="primary-button" onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ItemInfoBox;
