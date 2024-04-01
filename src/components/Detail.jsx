import "./Detail.css";
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};
export default Modal;
