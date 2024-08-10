/* create detailed item view component */
import {useState} from 'react';
import '../../styles/DetailedItemView.css';
import ItemInfoBox from "./ItemInfoBox.tsx";

interface DetailedItemViewProps {
    artist: string;
    description: string;
    price: number;
    image: string;
}


const DetailedItemView = (props: DetailedItemViewProps) => {
    const [openQuiz, setOpenQuiz] = useState(false)
    const handleQuizOpen = () => {
        setOpenQuiz(true);
    }

    return (
        <div className="detailedItemContainer">
            <div className="item-photo-container">
                <div className="detailedItem">
                    <img src={props.image} alt="item" />
                </div>
                <div className="detailedItem">
                    <img src={props.image} alt="item" />
                </div>
            </div>
            <ItemInfoBox artist={props.artist} description={props.description} price={props.price} onAddToCart={handleQuizOpen}/>
        </div>
    )
}
export default DetailedItemView;
