import { MdDeleteForever } from "react-icons/md";
import "./Note.css";
const Note = () => {
  return (
    <div className="note-pad">
      <span>My note is very interesting</span>
      <div className="note-footer">
        <small>04/04/2024</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
export default Note;
