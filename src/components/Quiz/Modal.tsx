import "../../styles/Modal.css";
import { useState, useEffect } from "react";
import countdownSound from "../../assets/sounds/countdown.mp3";
import QuizView from "./QuizView.tsx";
interface ModalProps {
    open: boolean;
    onClose: () => void;
    artist: String;
    addCart: (size: string) => void;
    selectedSize: String;
}

const Modal = (props: ModalProps) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [isOver, setIsOver] = useState(false);
    useEffect(() => {
        // play countdown sound here:
        if (countdown === 3) {
            const soundEffect = new Audio(countdownSound);
            soundEffect.play().catch(error => console.error('Failed to play sound:', error));
        }
        if (countdown > 0) {
            const timerId = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            // Switch to quiz view when countdown reaches 0
            setShowQuiz(true);
        }
    }, [countdown]);

    return (
        <div className="modal-background">
            <div className="modal">
                {!showQuiz ? (
                    <div className="countdown-view">
                            <div className="title-holder">
                                <h1 className="main-title">HOLD UP!</h1>
                                <h2 className="artist-title" style={{paddingTop: "20px"}}>Name 5 {props.artist} songs first!</h2>
                            </div>
                        <div className="countdown">
                            <h1 key={countdown} className="countdown-number">{countdown === 0 ? "GO!" : countdown}</h1>
                        </div>
                    </div>
                ) : (
                    <QuizView artist={props.artist}  addCart={props.addCart} selectedSize={props.selectedSize} isOver={isOver} setIsOver={(bool) => setIsOver(bool)}/>
                )}
                <div className="button-holder">
                    {!isOver &&
                        <button className="primary-button" onClick={props.onClose}>
                            I give up
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;
