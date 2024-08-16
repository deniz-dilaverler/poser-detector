import { useState } from 'react';
import '../../styles/DetailedItemView.css';
import ItemInfoBox from "./ItemInfoBox.tsx";
import Modal from "../Quiz/Modal.tsx";
import { Item } from '../../data/models.ts';

const DetailedItemView = (props: Item & { addCart: (size: string) => void }) => {
    const [openQuiz, setOpenQuiz] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");

    const handleQuizOpen = () => {
        if (selectedSize) {
            setOpenQuiz(true);
        }
    };

    const handleQuizClose = () => {
        setOpenQuiz(false);
        window.location.reload();
    }

    return (
        <div className="detailedItemContainer">
            <div className="item-photo-container">
                {props.images && props.images.map((image, index) => (
                    <div className="detailedItem" key={index}>
                        <img src={`/tshirts/${image}.png`} alt="item"/>
                    </div>
                ))}
            </div>
            <ItemInfoBox
                artist={props.artist}
                description={props.description}
                price={props.price}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                onAddToCart={handleQuizOpen}
            />
            {openQuiz && <Modal open={openQuiz} onClose={handleQuizClose}  artist={props.artist}  addCart={props.addCart}  selectedSize={selectedSize}/>}
        </div>
    );
};

export default DetailedItemView;
