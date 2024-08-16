import {useEffect, useState} from 'react';
import "../../styles/Modal.css";
import rightArrow from "../../assets/right-arrow.png";
import correctSound from "../../assets/sounds/correct.mp3";
import wrongSound from "../../assets/sounds/wrong-answer.mp3";
import Notification from "./Notification.tsx";
import {Entry, EntryResult, EntryStatus, makeGuess} from "../../quiz/quiz.ts";

interface QuizViewProps {
    artist: string;
}

const QuizView = (props: QuizViewProps) => {
    const [answer, setAnswer] = useState("");
    const [countdown, setCountdown] = useState(60);
    const [answers, setAnswers] = useState<Entry[]>([]);
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
            const [result, answersRes] = makeGuess(props.artist, answers, answer);
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
                    wrongSoundEffect.play().catch(error => console.error('Failed to play sound:', error));
                    setNotification({ message: "Not the most known song!", type: EntryResult.BASIC });
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
                            <span className={ans.status === EntryStatus.CORRECT ? "correct-answer" : "wrong-answer"}>{ans.status === EntryStatus.CORRECT ? "✔" : "⨉"}</span> {ans.word}
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
