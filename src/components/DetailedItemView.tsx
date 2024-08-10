/* create detailed item view component */
import React from 'react';
import '../styles/DetailedItemView.css';

interface DetailedItemViewProps {
    artist: string;
    description: string;
    price: number;
    image: string;
}


const DetailedItemView = (props: DetailedItemViewProps) => {
    const sizes: string[] = ["XS", "S", "M", "L", "XL"];
    return (
        <div className="detailedItemContainer">
            <div className="detailedItem">
                <img src={props.image} alt="item" />
            </div>
            <div className="detailedItem">
                <img src={props.image} alt="item" />
            </div>
            <div className="itemDetails">
                <h2 className="artist-title">{props.artist}</h2>
                <p className="description"  style={{paddingTop: "5px"}}>{props.description} - ${props.price}</p>
                <div className="lightDivider"></div>
                <div className="sizeContainer">
                {
                    sizes.map((size) => {
                        return <button className="sizeButton">{size}</button>
                    })
                }
                </div>
                <button className="primary-button">Add to Cart</button>
            </div>
        </div>
    )
}
export default DetailedItemView;
