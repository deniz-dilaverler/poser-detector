import { Item } from '../data/models.ts';
import bin from '../assets/bin.png';
const CartItem = (props: Item & { removeFromCart?: () => void } & {size: String} & {imageSize: String}) => {
    const imageClass = props.imageSize === 'large' ? 'cartImageLarge' :
        props.imageSize === 'small' ? 'cartImageSmall' :
            'cartImageLarge';
    const cartClass = props.imageSize === 'large' ? 'cartImageContainer' :
        props.imageSize === 'small' ? 'cartImageContainerSmall' :
            'cartImageContainer';
    return (
        <div className="cartDisplay">
            <div className={cartClass}>
                <img className={imageClass} src={`tshirts/${props.images[0]}.png`} alt=""/>
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
