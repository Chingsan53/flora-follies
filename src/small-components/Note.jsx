import "./Note.css";
const Note = () => {
  return (
    <div className="note-whole">
      <div className="note-title">
        <div className="button-1" style={{ backgroundColor: "#EFBC9B" }}>
          ❌
        </div>
        <h3>My Note</h3>
        <div className="button-1" style={{ backgroundColor: "#EFBC9B" }}>
          ✔
        </div>
      </div>
      <div className="note-pad">
        <span>Write something here...</span>
        <div className="note-footer">
          {/* <small>04/04/2024</small>
          <MdDeleteForever className="delete-icon" size="1.3em" /> */}
        </div>
      </div>
    </div>
  );
};
export default Note;
