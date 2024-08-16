import { useEffect } from "react";
import { EntryResult } from "../../quiz/quiz.ts";
import guy from "../../assets/punk-guy.png";

const Notification = ({ message, type }: { message: string, type: EntryResult | null }) => {
    if (!type) return null;

    let notificationClass = "notification";

    switch (type) {
        case EntryResult.WIN:
            break;
        case EntryResult.CORRECT:
            notificationClass += " top-notification correct";
            break;
        case EntryResult.INCORRECT:
            notificationClass += " top-notification incorrect";
            break;
        case EntryResult.DUPLICATE:
            notificationClass += " top-notification incorrect";
            break;
        case EntryResult.BASIC:
            notificationClass += " corner-notification";
            break;
        default:
            break;
    }

    useEffect(() => {
        console.log("Notification updated:");
        console.log(`Message: ${message}, Type: ${type}`);
    }, [message, type]);

    return (
        <div key={type} className={notificationClass}>
            {type === EntryResult.BASIC && <img src={guy} alt={"Punk Guy"} />}
            <p>{message}</p>
        </div>
    );
};

export default Notification;
