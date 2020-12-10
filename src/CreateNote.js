import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false); //expand buttons

  const [note, setNote] = useState({
    title: "",
    content: "",
  }); //set values

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  }; //exapand box

  const backtoNormal = () => {
    setExpand(false);
  }; //archieve box

  return (
    <>
      <div className="main_note" onDoubleClick={backtoNormal}>
        <form>
          {expand ? (
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={InputEvent}
                className="form-control"
                placeholder="Title"
              />
            </div>
          ) : null}
          <div className="form-group">
            <textarea
              className="form-control"
              name="content"
              id="exampleFormControlTextarea1"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write a Note.."
              onClick={expandIt}
            ></textarea>
          </div>
          {expand ? (
            <div>
              <Button  onClick={addEvent} variant="contained" color="primary">
                <AddIcon />
              </Button>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
