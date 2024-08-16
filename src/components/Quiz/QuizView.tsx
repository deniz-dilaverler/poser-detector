import { useEffect, useRef, useState } from 'react';
import "../../styles/Modal.css";
import rightArrow from "../../assets/right-arrow.png";
import correctSound from "../../assets/sounds/correct.mp3";
import wrongSound from "../../assets/sounds/wrong-answer.mp3";
import clockTicking from "../../assets/sounds/60-second-countdown.mp3";
import gameWin from "../../assets/sounds/game-win.mp3";
import Notification from "./Notification.tsx";
import { Entry, EntryResult, EntryStatus, makeGuess } from "../../quiz/quiz.ts";
import useCartItems from "../../data/useCartItems.ts";

interface QuizViewProps {
    artist: string;
    addCart: (size: string) => void;
    selectedSize: string;
    isOver: boolean;
    setIsOver: (isOver: boolean) => void;
}

const QuizView = (props: QuizViewProps) => {
    const [answer, setAnswer] = useState("");
    const [countdown, setCountdown] = useState(60);
    const [answers, setAnswers] = useState<Entry[]>([]);
    const [notification, setNotification] = useState<{ message: string, type: EntryResult | null }>({
        message: "",
        type: null
    });
    const { addToCartJustin } = useCartItems();
    const correctSoundEffect = new Audio(correctSound);
    const wrongSoundEffect = new Audio(wrongSound);
    const countdownSoundEffect = new Audio(clockTicking);
    const gameWinSoundEffect = new Audio(gameWin);

    // Create a ref for the input element
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (countdown === 60) {
            countdownSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
        }
        if (countdown > 0) {
            if (props.isOver) {
                countdownSoundEffect.pause();
                return;
            }
            const timerId = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            addToCartJustin();
        }
    }, [countdown]);

    useEffect(() => {
        // Focus the input element when the component mounts
        inputRef.current?.focus();
    }, []);

    const handleAnswerSubmit = () => {
        if (answer.trim() !== "") {
            const [result, answersRes] = makeGuess(props.artist, answers, answer);
            switch (result) {
                case EntryResult.WIN:
                    gameWinSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    props.setIsOver(true);
                    props.addCart(props.selectedSize);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    break;
                case EntryResult.CORRECT:
                    correctSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    break;
                case EntryResult.INCORRECT:
                    wrongSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "Incorrect! Try a bit harder!", type: EntryResult.INCORRECT });
                    break;
                case EntryResult.BASIC:
                    wrongSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "Oh, come on! Not the most known song!", type: EntryResult.BASIC });
                    break;
                case EntryResult.DUPLICATE:
                    wrongSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "You already said that!", type: EntryResult.DUPLICATE });
                    break;
                default:
                    break;
            }
            setAnswers(answersRes);
            setAnswer(""); // Clear input box
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleAnswerSubmit();
        }
    };

    return (
        <div>
            <Notification message={notification.message} type={notification.type} />
            {props.isOver &&
                <div>
                    <h1 className="main-title">You did it! You're not a poser!</h1>
                    <p className="description">Adding to the shopping cart t-shirt of {props.artist}.</p>
                </div>
            }
            {countdown === 0 && !props.isOver &&
                <div>
                    <h1 className="main-title">You are a poser!</h1>
                    <p className="description" style={{ paddingBottom: "20px", paddingTop: "10px" }}>Adding to the
                        shopping cart t-shirt of Justin Bieber.</p>
                </div>
            }
            {!props.isOver && countdown !== 0 &&
                <div>
                    <div className="header">
                        <h1 className="main-title">Prove you are not a poser!</h1>
                        <div className="countdown">
                            <h1 key={countdown} className="countdown-number">{countdown}</h1>
                        </div>
                    </div>
                    <div className="quiz-container">
                        <div className="quiz-header">
                            <h2 className="artist-title">Name 5 {props.artist} songs.</h2>
                        </div>
                        <div className="quiz-content">
                            {[...answers].reverse().map((ans, index) => (
                                <p key={index}>
                                    <span className={ans.status === EntryStatus.CORRECT ? "correct-answer" : ans.status === EntryStatus.BASIC ? "basic-answer" : "wrong-answer"}>
                                        {ans.status === EntryStatus.CORRECT ? "✔" : "⨉"}
                                    </span>
                                    {ans.word}
                                </p>
                            ))}
                        </div>
                        <div className="quiz-input">
                            <input
                                type="text"
                                placeholder="Type in your answer here..."
                                className="quiz-input-box"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                onKeyPress={handleKeyPress}
                                ref={inputRef} // Attach the ref to the input element
                            />
                            <button
                                className="quiz-input-button"
                                onClick={handleAnswerSubmit}
                            >
                                <img src={rightArrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default QuizView;
