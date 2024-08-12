import { Item } from '../data/models.ts';
import bin from '../assets/bin.png';
const CartItem = (props: Item & { removeFromCart: () => void } & {size: String}) => {

    return (
        <div className="cartDisplay">
            <div className="cartImageContainer">
                <img className="cartImage" src={`tshirts/${props.images[0]}.png`} alt=""/>
            </div>
            <div className="cartInfoDisplay">
                <h2 className="artist-title">{props.artist}</h2>
                <p className="description"  style={{paddingTop: "5px"}}>{props.description} - ${props.price}</p>
                <p className="description">{props.size}</p>
                <button className="deleteButton" onClick={props.removeFromCart}>
                   Remove <img src={bin} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
