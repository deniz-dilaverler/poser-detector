/* create detailed item view component */
import {useState, useEffect} from 'react';
import '../../styles/DetailedItemView.css';
import ItemInfoBox from "./ItemInfoBox.tsx";
import Modal from "./Modal.tsx";


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
                    <img src={`/tshirts/arctic_monkeys_logo_tshirt.png`} alt="item" />
                </div>
                <div className="detailedItem">
                    <img src={`../../${props.image}.png`} alt="item" />
                </div>
            </div>
            <ItemInfoBox artist={props.artist} description={props.description} price={props.price} onAddToCart={handleQuizOpen}/>
            {openQuiz && <Modal open={openQuiz} onClose={() => setOpenQuiz(false)} />}
        </div>
    )
}
export default DetailedItemView;
