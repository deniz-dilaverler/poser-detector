import {useState, useEffect} from 'react';
import '../../styles/DetailedItemView.css';
import ItemInfoBox from "./ItemInfoBox.tsx";
import Modal from "./Modal.tsx";
import { Item } from '../../data/models.ts';

const DetailedItemView = (props: Item) => {
    console.log("props images")
    console.log(props.images)
    const [openQuiz, setOpenQuiz] = useState(false)
    const handleQuizOpen = () => {
        setOpenQuiz(true);
    }

    return (
        <div className="detailedItemContainer">
            <div className="item-photo-container">
                {props.images && props.images.map((image, index) => {
                    return (
                        <div className="detailedItem" key={index}>
                            <img src={`/tshirts/${image}.png`} alt="item"/>
                        </div>
                    )
                })}
            </div>
            <ItemInfoBox artist={props.artist} description={props.description} price={props.price} onAddToCart={handleQuizOpen}/>
            {openQuiz && <Modal open={openQuiz} onClose={() => setOpenQuiz(false)} />}
        </div>
    )
}
export default DetailedItemView;
