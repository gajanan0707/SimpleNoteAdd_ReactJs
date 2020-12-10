import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";


const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="mainCard">
        <div className="card">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button variant="contained" color="secondary" onClick={deleteNote}>
          <DeleteIcon className="deleteicon" />
        </Button>
      </div>
      </div>
    </>
  );
};

export default Note;
