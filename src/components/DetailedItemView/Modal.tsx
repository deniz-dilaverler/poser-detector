import "../../styles/Modal.css";
import {useState} from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  artist: String;
}
/*
<button className="modal-button" onClick={props.onClose}>Close</button>
 */
const Modal = (props: ModalProps) => {
    const [answer, setAnswer] = useState("");
  return (
    <div className="modal-background">
        <div className="modal">
            <div className="header">
                <div className="title-holder">
                    <h1 className="main-title">HOLD UP! Are you a real fan?</h1>
                </div>
                <div className="timer-holder">
                    <h1 className="timer">Timer: 10:00</h1>
                </div>
            </div>
            <div className="quiz-container">
                <div className="quiz-header">
                    <h2 className="artist-title">Name 5 {props.artist} songs first!</h2>
                </div>
                <div className="quiz-content">
                    {/* Display answers here */}
                </div>
                <div className="quiz-input">
                    <input value={answer} type="text" placeholder="Enter your answer" className="quiz-input-box" />
                    <button className="quiz-input-button"> {">"} </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;
