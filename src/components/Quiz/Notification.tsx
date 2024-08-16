import {useEffect} from "react";
import {EntryResult} from "../../quiz/quiz.ts";
import guy from "../../assets/punk-guy.png";

const Notification = ({ message, type }: { message: string, type: EntryResult | null }) => {
    if (!type) return null;

    let notificationClass = "notification";
    if (type === EntryResult.CORRECT || type === EntryResult.INCORRECT || type === EntryResult.DUPLICATE) {
        notificationClass += " top-notification";
    } else if (type === EntryResult.BASIC) {
        notificationClass += " corner-notification";
    }
    if (type === EntryResult.CORRECT) {
        notificationClass += " correct";
    } else if (type === EntryResult.INCORRECT) {
        notificationClass += " incorrect";
    } else if (type === EntryResult.DUPLICATE) {
        notificationClass += " incorrect";
    }

    useEffect(() => {
        console.log("Notification updated:");
        console.log(`Message: ${message}, Type: ${type}`);
    }, [message, type]);

    return (
        <div className={notificationClass}>
            {type === EntryResult.BASIC && <img src={guy} alt={"Punk Guy"} />}
            <p>{message}</p>
        </div>
    );
};

export default Notification;
