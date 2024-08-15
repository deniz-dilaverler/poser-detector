import {EntryResult} from "./QuizView.tsx";

const Notification = ({ message, type }: { message: string, type: EntryResult | null }) => {
    if (!type) return null;

    let notificationClass = "notification";
    if (type === EntryResult.CORRECT || type === EntryResult.INCORRECT) {
        notificationClass += " top-notification";
    } else if (type === EntryResult.BASIC) {
        notificationClass += " corner-notification";
    }

    return (
        <div className={notificationClass}>
            <p>{message}</p>
        </div>
    );
};
export default Notification;
