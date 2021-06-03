import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.css';
import Search from './Search';
import { useState, useEffect } from 'react'


const NotesSection = () => {
  const [texts, setTexts] = useState([])
  const [searchText, setSearchText] = useState('')

  
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)


  useEffect(() => {
    localStorage.setItem('notesreactredux-data', JSON.stringify(notes))
  }, [notes])

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if (notes.length === 0) {
    return (
      <div className="notesSection__container__empty">
        <div className="notesSection_header">
          <h2>Notes</h2>
        </div>
        <Search handleSearchNote={setSearchText} />
        <p>There is no note yet. Please add one.</p>
      </div>
    )
  }

  return (
    <div className="notesSection__container">
      <div className="notesSection_header">
        <h2>Notes</h2>
      </div>
      <Search handleSearchNote={setSearchText} />
      <div className="notesSection_notes">


        {notes.filter((item) => item.content.toLowerCase().includes(searchText) || item.title.toLowerCase().includes(searchText)).map((item, index) => {
          if (item) {
            return (
              <NoteItem
                title={item.title}
                content={item.content}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            )
          }
          return null;
        })
        }

      </div>
    </div>
  );
};

export default NotesSection;
