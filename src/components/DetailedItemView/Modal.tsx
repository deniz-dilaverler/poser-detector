import "../../styles/Modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal-background">
        <div className="modal">
            <div className="modal-header">
                <h3>Modal Title</h3>
                <button onClick={props.onClose}>Close</button>
            </div>
            <p>Content for the modal</p>
        </div>
    </div>
  );
};

export default Modal;
