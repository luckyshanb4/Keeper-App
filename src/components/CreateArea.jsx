import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [zoom,setZoom]=useState(false);

  function onClick(){
    setZoom(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      <Zoom in={zoom}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        </Zoom>
        <textarea
          name="content"
          onClick={onClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoom ? "3" :"1"}
        />
        <Zoom in={zoom}>
        <Fab onClick={submitNote}><AddCircleIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
