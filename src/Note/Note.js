import React, { Component } from 'react';
import './Note.css'

class Note extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { index } = this.props;
    this.props.onNoteSelect(index);
  }


  render() {
    const { title, isSelected } = this.props;

    const prunedTitle = title.length > 25 ? `${title.substring(0,25)}...` : title;

    return (
      <div
        className={ `Note ${ isSelected ? 'selectedNote' : '' }` }
        onClick={ this.onClick }
      >
        <div className='NoteTitle'>{ prunedTitle }</div>
      </div>
    );
  }
}

export default Note;