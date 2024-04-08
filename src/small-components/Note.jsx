import { useRef, useState, useEffect } from "react";
import "./Note.css";
const Note = ({ flowerData }) => {
  const [noteContent, setNoteContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const savedNote = localStorage.getItem(`myNote${flowerData.id}`);
    if (savedNote) {
      setNoteContent(savedNote);
    }
  }, [flowerData.id]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [noteContent]);

  const handleSave = () => {
    setEditMode(false);
    localStorage.setItem(`myNote${flowerData.id}`, noteContent);
  };

  const handleCancel = () => {
    setEditMode(true);
  };

  const handleContentChange = (event) => {
    setNoteContent(event.target.value);
  };

  return (
    <div className="note-whole">
      <div className="note-title">
        <div
          className="button-1"
          style={{ backgroundColor: "#EFBC9B" }}
          onClick={handleCancel}
        >
          Edit
        </div>
        <h3>My Note</h3>
        <div
          className="button-1"
          style={{ backgroundColor: "#EFBC9B" }}
          onClick={handleSave}
        >
          Submit
        </div>
      </div>
      <div className="note-pad">
        {editMode ? (
          <textarea
            ref={textareaRef}
            value={noteContent}
            onChange={handleContentChange}
            placeholder="Write something here..."
            style={{ overflowY: "hidden" }}
          />
        ) : (
          <span>{noteContent || "Write something here..."}</span>
        )}

        <div className="note-footer">
          {/* <small>04/04/2024</small>
          <MdDeleteForever className="delete-icon" size="1.3em" /> */}
        </div>
      </div>
    </div>
  );
};
export default Note;
