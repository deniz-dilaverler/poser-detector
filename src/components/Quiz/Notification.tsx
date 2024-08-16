import { useEffect } from "react";
import { EntryStatus } from "../../quiz/quiz.ts";
import guy from "../../assets/punk-guy.png" ;
const Notification = ({ message, type }: { message: string, type: EntryStatus | null }) => {
    if (!type) return null;

    let notificationClass = "notification";
    if (type === EntryStatus.CORRECT || type === EntryStatus.INCORRECT) {
        notificationClass += " top-notification";
    } else if (type === EntryStatus.BASIC) {
        notificationClass += " corner-notification";
    }
    if (type === EntryStatus.CORRECT) {
        notificationClass += " correct";
    } else if (type === EntryStatus.INCORRECT) {
        notificationClass += " incorrect";
    }

    useEffect(() => {
        console.log("Notification updated:");
        console.log(`Message: ${message}, Type: ${type}`);
    }, [message, type]);

    return (
        <div className={notificationClass}>
            {type === EntryStatus.BASIC && <img src={guy} alt={"Punk Guy"} />}
            <p>{message}</p>
        </div>
    );
};

export default Notification;
