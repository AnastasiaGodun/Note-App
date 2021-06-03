import React from 'react';
import NoteItem from './NoteItem';
import './NotesSection.style.css';



const NotesSection = () => {
  return (
    <div className="NotesSection__container">
      <div className="NotesSection_header">
        <h2>Notes</h2>
      </div>
      <NoteItem
        title="Note title"
        content="Note content"
      />
    </div>
  );
};

export default NotesSection;
