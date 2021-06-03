import React from 'react';
import './NoteItem.style.css';

const NoteItem = ({ title, content, onItemClicked }) => {
  return (
    <div
      className="noteItem__container"
      role="button"
      onClick={onItemClicked}
    >
      
      <h2 className="noteItem_title">{title && title.substr(0, 5) + "..."}</h2>
      <p>{content && content.substr(0, 5) + "..."}</p>
      <small className="noteItem_date">
        Last Modified{" "}
        {new Date().toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </small>
    </div>
  );
};

export default NoteItem;
