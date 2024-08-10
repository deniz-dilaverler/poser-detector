import {useState} from "react";

interface itemInfoBoxProps {
    artist: string;
    description: string;
    price: number;
    onAddToCart: () => void;
}
const ItemInfoBox = (props: itemInfoBoxProps) => {
    const sizes: string[] = ["XS", "S", "M", "L", "XL"];
    const [selectedSize, setSelectedSize] = useState("")
    const [showError, setShowError] = useState(false)
    function addToCart() {
        if (selectedSize === "") {
            setShowError(true)
        } else {
            setShowError(false)
            props.onAddToCart()
        }
    }
    return (
            <div className="itemDetails">
                <h2 className="artist-title">{props.artist}</h2>
                <p className="description"  style={{paddingTop: "5px"}}>{props.description} - ${props.price}</p>
                <div className="lightDivider"></div>
                <div className="sizeContainer">
                    {
                        sizes.map((size) => {
                            return <button
                                className={`sizeButton ${size === selectedSize ? "isActive" : ""}`}
                                onClick={() => setSelectedSize(size)}
                            >{size}</button>
                        })
                    }
                </div>
                {showError && <p className="description sizeErrorDisplay">Select a size first!</p>}
                <button className="primary-button" onClick={addToCart}>Add to Cart</button>
            </div>
    )
}

export default ItemInfoBox;
