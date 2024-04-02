import "./Detail.css";
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-inner">{children}</div>
        <div className="modal-outer">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};
export default Modal;
