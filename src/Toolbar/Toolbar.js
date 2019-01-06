import React, { Component } from 'react';
import './Toolbar.css'

class Toolbar extends Component {
  render() {
    return (
      <div className='Toolbar'>
        <div onClick={ this.props.onDelete }className="delete fa fa-2x fa-trash"></div>
        <div onClick={ this.props.onAdd } className="add fa fa-2x fa-plus"></div>
      </div>
    );
  }
}

export default Toolbar;