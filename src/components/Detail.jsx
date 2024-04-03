import "./Detail.css";
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  const handleBackdropClick = (e) => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">{children}</div>
    </div>
  );
};
export default Modal;
