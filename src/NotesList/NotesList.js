import React, { Component } from 'react';
import Note from '../Note/Note';
import './NotesList.css'

class NotesList extends Component {

  constructor(props) {
    super(props);
    this.onNoteSelect = this.onNoteSelect.bind(this);
  }

  onNoteSelect(index) {
    this.props.onNoteSelect(index);
  }

  render() {
    const { notes, selectedNote } = this.props;

    return (
      <div className='NotesList'>
          {
            notes.map((note, index) => (
              <Note
                key = { index }
                index = { index }
                title = { note.title }
                isSelected = { index === selectedNote }
                onNoteSelect={ this.onNoteSelect }
              />
            ))
          }
      </div>
    );
  }
}

export default NotesList;