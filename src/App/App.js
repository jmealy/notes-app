import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'
import Editor from '../Editor/Editor';
import NotesList from '../NotesList/NotesList';
import './App.css';

class App extends Component {

  constructor() {
    super();

    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    this.state = {
      notes: notes,
      selectedNote: 0
    }
  }

  saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  }

  addNewNote = () => {
    const { notes } = this.state;

    notes.unshift({ text: '', title: 'New Note' });
    this.setState({ notes, selectedNote: 0 });
    this.saveNotes();
  }

  deleteCurrentNote = () => {
    const { notes, selectedNote } = this.state;

    // notes.shift();
    notes.splice(selectedNote, 1);
    const selected = notes[selectedNote] ? selectedNote : notes.length - 1;
    this.setState({ notes, selectedNote: selected });
    this.saveNotes();
  }

  changeSelectedNote = (noteIndex) => {
    this.setState({ selectedNote: noteIndex});
  }

  updateNoteValue = (value) => {
    const { selectedNote, notes } = this.state;

    const newNotes = notes.slice();
    newNotes[selectedNote].text = value;
    newNotes[selectedNote].title = value.split('\n')[0];

    this.setState({ notes: newNotes });
    this.saveNotes();
  }

  render() {
    const { selectedNote, notes } = this.state;

    const noteText = notes.length > 0 ? notes[selectedNote].text : '';

    return (
      <div className="App">
        <div className="ToolbarGrid">
          <Toolbar
            onAdd={ this.addNewNote }
            onDelete={ this.deleteCurrentNote }
          >
          </Toolbar>
        </div>
        <div className="NotesListGrid">
          <NotesList
            notes={ notes }
            selectedNote={ this.state.selectedNote }
            onNoteSelect={ this.changeSelectedNote }
          />
        </div>
        <div className="EditorGrid">
          <Editor
            noteText={ noteText }
            onNoteChange={ this.updateNoteValue }
            isEnabled={ !!notes && notes.length > 0 }
          />
        </div>
      </div>
    );
  }
}

export default App;
