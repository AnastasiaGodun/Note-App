import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './InputSection.style.css';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if (title && content) {
      dispatch(noteActions.addNote({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if (title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="inputSection_container">
      <h2>Your note</h2>
      <input
        className="input"
        type="text"
        placeholder="Note title"
        value={title}
        onChange={e =>
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <textarea
        className="textarea"
        placeholder="Note content"
        value={content}
        onChange={e =>
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection_container_btnWrapper"
      >
        <button
          className="button"
          onClick={id === -1 ? addNote : updateNote}
        >
          {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
        </button>
        {id !== -1 &&
          <button
            className="button"
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE NOTE
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;
