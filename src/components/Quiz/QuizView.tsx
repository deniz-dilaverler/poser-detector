import { useState, useEffect } from 'react';
import "../../styles/Modal.css";
import rightArrow from "../../assets/right-arrow.png";
import countdownSound from "../../assets/sounds/countdown.mp3";
import correctSound from "../../assets/sounds/correct.mp3";
import wrongSound from "../../assets/sounds/wrong-answer.mp3";
import Notification from "./Notification.tsx";

interface QuizViewProps {
    artist: string;
}
/* TODO will be deleted later */
export enum EntryResult {
    CORRECT,
    INCORRECT,
    WIN,
    BASIC,
    DUPLICATE
}

const QuizView = (props: QuizViewProps) => {
    const [answer, setAnswer] = useState("");
    const [countdown, setCountdown] = useState(60);
    const [answers, setAnswers] = useState<{ text: string, isCorrect: EntryResult }[]>([]);
    const [notification, setNotification] = useState<{ message: string, type: EntryResult | null }>({ message: "", type: null });

    const correctSoundEffect = new Audio(correctSound);
    const wrongSoundEffect = new Audio(wrongSound);

    useEffect(() => {
        if (countdown === 60) {
            //const soundEffect = new Audio(countdownSound);
            //soundEffect.play().catch(error => console.error('Failed to play sound:', error));
        }
        if (countdown > 0) {
            const timerId = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [countdown]);

    const handleAnswerSubmit = () => {
        if (answer.trim() !== "") {
            const result = checkAnswer(answer);
            switch (result) {
                case EntryResult.CORRECT:
                    correctSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "Correct!", type: EntryResult.CORRECT });
                    break;
                case EntryResult.INCORRECT:
                    wrongSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "Incorrect! Try a bit harder!", type: EntryResult.INCORRECT });
                    break;
                case EntryResult.BASIC:
                    setNotification({ message: "Basic Answer", type: EntryResult.BASIC });
                    break;
                default:
                    break;
            }
            setAnswers([...answers, { text: answer, isCorrect:  result}]);
            setAnswer(""); // Clear input box
        }
    };


    /* TODO Change to a real check! Check if the answer starts with the letter 'a' */
    const checkAnswer = (answer: string) => {
        if (answer.toLowerCase().startsWith("a")) {
            return EntryResult.CORRECT
        } else if (answer.toLowerCase().startsWith("b")) {
            return EntryResult.INCORRECT
        } else {
            return EntryResult.BASIC
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
                    {answers.map((ans, index) => (
                        <p key={index}>
                            <span className={ans.isCorrect === EntryResult.CORRECT ? "correct-answer" : "wrong-answer"}>{ans.isCorrect === EntryResult.CORRECT ? "✔" : "⨉"}</span> {ans.text}
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
                    />
                    <button
                        className="quiz-input-button"
                        onClick={handleAnswerSubmit}
                    >
                        <img src={rightArrow} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuizView;
